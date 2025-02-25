"use client"
import Headertop from "@/components/Headertop";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import CategoryGrid from "@/components/Category";
import Trending from "@/components/Trending";
import BestSeller from "@/components/BestSeller";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1></h1>
      <Headertop/>
      <Header/>
      <Navbar/>
      <Hero/>
      <CategoryGrid/>
      <Trending/>
      <BestSeller/>
      <Footer/>
    </div>
  );
}
