import HomePage from "./homePage/page"; 
import About from "./about/page";
import Chefs from "./chefs/page";
import FAQ from "./FAQ/page";
import ProductCards from "./food/page";

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <ProductCards />
      <Chefs />
      <FAQ />
    </div>
  );
}


