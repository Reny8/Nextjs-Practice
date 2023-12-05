import Hero from "@/components/Hero/Hero";
import home from "public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        imgSource={home}
        imgAlt="Car Factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
