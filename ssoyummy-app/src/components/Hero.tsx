import foodImage from "../assets/homepage.jpg"
import foodImageMobile from "../assets/mobile.jpg"

export default function Hero() {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={foodImage} />
      <img 
        src={foodImageMobile} 
        alt="Delicious Food"
        className="w-full h-full object-cover"
      />
    </picture>
  );
}