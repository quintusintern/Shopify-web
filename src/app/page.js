
import CategoryGrid from "@/components/Category";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";
import TwoCards from "@/components/TwoCards";
import BestSeller from "@/components/BestSeller";
import BlogSection from "@/components/BlogSection";
import FollowUs from "@/components/FollowUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CategoryGrid/>
      <Trending/>
      <TwoCards/>
      <BestSeller/>
      <BlogSection/>
      <FollowUs/>
      <Footer/>
    </>
  );
}
