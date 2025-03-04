import CategoryGrid from "@/components/Category";
import EmptyWishlist from "@/components/Emptywishlist";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Headertop from "@/components/Headertop";

import Header from "@/components/Header";
import Headertop from "@/components/Headertop";
import HeroCarousel from "@/components/Hero";

import Navbar from "@/components/Navbar";

const User = () => {
    return <>

        <Navbar />
        <EmptyWishlist />
        <Footer />
        <Headertop />
        <Header />
        <Navbar />
        <HeroCarousel />
        <CategoryGrid />

    </>
};

export default User;