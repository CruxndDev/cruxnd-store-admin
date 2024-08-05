import Link from "next/link";

const ProductsCards = ({ productCategories }) => {
  return (
    <div>
      {productCategories.map((productCategory) => (
        <div key={productCategory.name}>
          <div>
            <div>
              <div>{productCategory.icon}</div>
              <small>{productCategory.name}</small>
            </div>
            <Link href={productCategory.link}>Shop</Link>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCards;
