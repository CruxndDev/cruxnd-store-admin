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
    <div className="h-full w-full flex flex-col px-6 py-12 overflow-y-auto">
      <SwapTFilter />

      <ProductsCard productCategories={productCategories} />
    </div>
  );
}
 
export default ProductsPage;