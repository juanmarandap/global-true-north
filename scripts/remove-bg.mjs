import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const files = [
  'whatget-access.png',
  'whatget-exposure.png',
  'whatget-clarity.png',
];

async function removeBg(filename) {
  const inputPath = `C:/Users/juanm/projects/gtn-landing/public/images/${filename}`;

  const image = sharp(inputPath).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const buf = Buffer.from(data);

  function getPixel(x, y) {
    const idx = (y * width + x) * channels;
    return { r: buf[idx], g: buf[idx + 1], b: buf[idx + 2], a: buf[idx + 3], idx };
  }

  function setAlpha(idx, val) { buf[idx + 3] = val; }

  // Sample background color from the 4 corners
  const corners = [
    getPixel(0, 0), getPixel(width - 1, 0),
    getPixel(0, height - 1), getPixel(width - 1, height - 1),
  ];
  const bgR = corners.reduce((s, p) => s + p.r, 0) / 4;
  const bgG = corners.reduce((s, p) => s + p.g, 0) / 4;
  const bgB = corners.reduce((s, p) => s + p.b, 0) / 4;
  console.log(`${filename} — bg sample: rgb(${Math.round(bgR)}, ${Math.round(bgG)}, ${Math.round(bgB)})`);

  const tolerance = 40;

  function diff(p) {
    return Math.sqrt((p.r - bgR) ** 2 + (p.g - bgG) ** 2 + (p.b - bgB) ** 2);
  }

  // BFS flood-fill from all 4 corners
  const visited = new Uint8Array(width * height);
  const queue = [];

  for (const c of corners) {
    const pidx = (Math.floor(c.idx / channels));
    if (!visited[pidx] && diff(c) < tolerance) {
      visited[pidx] = 1;
      queue.push(pidx);
    }
  }

  let head = 0;
  while (head < queue.length) {
    const pidx = queue[head++];
    setAlpha(pidx * channels, 0);

    const x = pidx % width;
    const y = Math.floor(pidx / width);

    const neighbors = [
      y > 0          ? pidx - width : -1,
      y < height - 1 ? pidx + width : -1,
      x > 0          ? pidx - 1     : -1,
      x < width - 1  ? pidx + 1     : -1,
    ];

    for (const n of neighbors) {
      if (n >= 0 && !visited[n]) {
        const nx = n % width;
        const ny = Math.floor(n / width);
        const p = getPixel(nx, ny);
        if (diff(p) < tolerance) {
          visited[n] = 1;
          queue.push(n);
        }
      }
    }
  }

  await sharp(buf, { raw: { width, height, channels } })
    .png()
    .toFile(inputPath.replace('.png', '-nobg.png'));

  console.log(`Done → ${filename.replace('.png', '-nobg.png')}`);
}

for (const f of files) {
  await removeBg(f);
}
