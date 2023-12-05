import Hero from "@/components/Hero/Hero";
import scale from "public/scale.jpg";
export default function ScalePage() {
  return (
    <div>
      <Hero
        imgSource={scale}
        imgAlt="Steel Warehouse"
        title="Scale To Infinity"
      />
    </div>
  );
}
