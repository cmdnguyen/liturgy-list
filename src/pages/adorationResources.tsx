import Hero from "../components/Hero";
import AdorationImage from "../../public/chahungmonstrace_cap12023.jpg"

export default function AdorationResources() {
  const heroText = "Adoration Resources";
  return (
    <>
      <Hero heroText={heroText} backgroundImageSrc={AdorationImage} />
    </>
  );
}