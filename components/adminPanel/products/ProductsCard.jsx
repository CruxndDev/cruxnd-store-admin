import Link from "next/link";

const ProductsCards = ({ productCategories }) => {
  return (
    <div className="w-full grid grid-cols-3 gap-5">
      {productCategories.map((productCategory) => (
        <div
          key={productCategory.name}
          className="flex flex-col rounded-2xl p-6"
          style={{
            boxShadow:
              "0px 2px 2px rgba(33, 33, 33, 0.6), 0px 0px 4px rgba(33, 33, 33, 0.6)",
          }}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex flex-col items-center">
              <div className="text-xl w-fit custom-shadow rounded-xl p-2">
                {productCategory.icon}
              </div>
              <small className="text-[11px] font-medium">
                {productCategory.name}
              </small>
            </div>
            <Link
              href={productCategory.link}
              className="bg-primaryColor text-white text-sm rounded-full px-3 py-1"
            >
              Shop
            </Link>
          </div>

          <div className="productImages w-full grid grid-cols-3 gap-2">
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
