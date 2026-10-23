
import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import HowIWork from "@/components/home/HowIWork";
import AIWorkflow from "@/components/home/AIWorkflow";
import Lab from "@/components/home/Lab";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <HowIWork />
      <AIWorkflow />
      <Lab />
    </main>
  );
}
