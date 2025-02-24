import CategoryGrid from "@/components/Category";
import Navbar from "@/components/Header";
import Headertop from "@/components/Headertop";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1></h1>
      <Headertop/>
      <Navbar/>
      <Hero/>
      <CategoryGrid/>
    </div>
  );
}
