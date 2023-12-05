import Hero from "@/components/Hero/Hero";
import performance from "public/performance.jpg";
export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgSource={performance}
        imgAlt="Laser Machine"
        title="Blazing Fast Performance"
      />
    </div>
  );
}
