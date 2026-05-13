import { writeFileSync } from "fs";
import { mkdirSync } from "fs";
import path from "path";

const logos = [
  { name: "tesla",        domain: "tesla.com" },
  { name: "google",       domain: "google.com" },
  { name: "salesforce",   domain: "salesforce.com" },
  { name: "nvidia",       domain: "nvidia.com" },
  { name: "airbnb",       domain: "airbnb.com" },
  { name: "apple",        domain: "apple.com" },
  { name: "yahoo",        domain: "yahoo.com" },
  { name: "lyft",         domain: "lyft.com" },
  { name: "doordash",     domain: "doordash.com" },
  { name: "fortinet",     domain: "fortinet.com" },
  { name: "synopsys",     domain: "synopsys.com" },
  { name: "bitso",        domain: "bitso.com" },
  { name: "plugandplay",  domain: "plugandplaytechcenter.com" },
  { name: "incode",       domain: "incode.com" },
  { name: "innit",        domain: "innit.com" },
  { name: "suggestic",    domain: "suggestic.com" },
  { name: "wilson",       domain: "wsgr.com" },
  { name: "enlightened",  domain: "enlightenedinc.com" },
  { name: "circuitlaunch",domain: "circuitlaunch.com" },
  { name: "stanford",     domain: "stanford.edu" },
  { name: "berkeley",     domain: "berkeley.edu" },
  { name: "singularity",  domain: "su.org" },
];

const outDir = path.join(process.cwd(), "public", "images", "logos");
mkdirSync(outDir, { recursive: true });

for (const logo of logos) {
  const url = `https://logo.clearbit.com/${logo.domain}`;
  try {
    const res = await fetch(url);
    if (!res.ok) { console.error(`FAIL ${logo.name}: ${res.status}`); continue; }
    const buf = await res.arrayBuffer();
    writeFileSync(path.join(outDir, `${logo.name}.png`), Buffer.from(buf));
    console.log(`OK   ${logo.name}`);
  } catch (e) {
    console.error(`ERR  ${logo.name}: ${e.message}`);
  }
}
