import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts] = useState([]); // Fix destructuring

  useEffect(() => {
    if (products) {
      setLatestProducts(products.slice(40, 50));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Don't forget to take a look on our latest collection.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pap-4 gap-y-6">
        {LatestProducts.length > 0 &&
          LatestProducts.map(
            (
              item,
              index // Check if LatestProducts is not empty
            ) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            )
          )}
      </div>
    </div>
  );
};

export default LatestCollection;
