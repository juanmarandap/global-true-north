import SiliconValleyHero from "@/components/SiliconValleyHero";
import SiliconValley from "@/components/SiliconValley";

export const metadata = { title: "Silicon Valley — Global True North" };

export default function SiliconValleyPage() {
  return (
    <div className="pt-[73px]">
      <SiliconValleyHero />
      <SiliconValley />
    </div>
  );
}
