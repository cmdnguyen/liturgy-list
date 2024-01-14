import Hero from "../components/Hero";
import MassImage from "../../public/mass_cap12021.jpg"

export default function AdorationResources() {
  const heroText = "Prayers used during Mass";
  return (
    <>
      <Hero heroText={heroText} backgroundImageSrc={MassImage} />
    </>
  );
}