import Hero from "@/components/Hero/Hero";
import reliability from "public/reliability.jpg";
export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        imgSource={reliability}
        imgAlt="Welder"
        title="Reliability Is Our Number One Priority"
      />
    </div>
  );
}
