import SwapTFilter from "@components/adminPanel/SwapTFilter";
import { GiConverseShoe, GiPearlNecklace } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { PiWatch } from "react-icons/pi";
import ProductsCard from "@components/adminPanel/products/ProductsCard";

const ProductsPage = () => {
  const productCategories = [
    { name: "Shoes", icon: <GiConverseShoe />, link: "/products", },
    { name: "Jewelries", icon: <GiPearlNecklace />, link: "/products", },
    { name: "Accessories", icon: <PiWatch />, link: "/products", },
    { name: "Clothes", icon: <FaTshirt />, link: "/products", },
    { name: "Clothes", icon: <FaTshirt />, link: "/products", },
    { name: "Clothes", icon: <FaTshirt />, link: "/products", },
  ];

  return (
    <div>
      <SwapTFilter />

      <ProductsCard productCategories={productCategories} />
    </div>
  );
}
 
export default ProductsPage;