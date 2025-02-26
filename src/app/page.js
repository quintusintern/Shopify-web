
import CategoryGrid from "@/components/Category";
import Header from "@/components/Header";
import Headertop from "@/components/Headertop";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Trending from "@/components/Trending";
import TwoCards from "@/components/TwoCards";
import BestSeller from "@/components/BestSeller";
import Footer from "@/components/Footer";
import Image from "next/image";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div>
      <h1></h1>
      <Headertop/>
      <Header/>
      <Navbar/>
      <Hero/>
      <CategoryGrid/>
      <BlogSection/>
      <Footer/>
     
    </div>
  );
}
