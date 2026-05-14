import Speakers from "@/components/Speakers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers | Global True North",
  description: "Expertos internacionales en innovación, IA, crecimiento global y transformación empresarial.",
};

export default function SpeakersPage() {
  return <Speakers />;
}
