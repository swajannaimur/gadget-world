import Image from "next/image";
import Hero from "./components/Hero";
import HighestPriceProducts from "./components/HighestPriceProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <HighestPriceProducts />
    </div>
  )

}
