import Hero from "@/components/Hero/Hero";
import home from 'public/home.jpg'

export default function Home() {
  return (<div>
    <Hero imgSource={home} title="Professional Cloud Hosting" />
  </div>)
}
