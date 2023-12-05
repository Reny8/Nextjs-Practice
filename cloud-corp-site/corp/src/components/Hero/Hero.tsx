import Image, { StaticImageData } from "next/image";
import "./Hero.css";

export default function Hero(props: {
  imgSource: StaticImageData;
  title: string;
}) {
  return (
    <div className="page-layout">
      <div className="page-layout__image-container">
        <Image src={props.imgSource} alt={props.title}/>
        <h1 className="page-layout__title">{props.title}</h1>
        <div className="overlay"></div>
      </div>
    </div>
  );
}
