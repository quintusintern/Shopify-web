import Header from "@/components/Header";
import Headertop from "@/components/Headertop";
import Navbar from "@/components/Navbar";
import ProductsPage from "@/components/Product";
import Footer from "@/components/Footer";
import CheckoutUI from "@/components/Checkout";

const Product = () => {
    return <>
     <CheckoutUI/>
    <Navbar/>
    <ProductsPage/>
    <Footer/>
    </>
  };
  
  export default Product;