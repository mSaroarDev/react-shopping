import { useEffect, useState } from "react";
import Product from "./Product";
import productList from "../API/FetchAPI";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    productList()
      .then((data) => setProduct(data))
      .catch((error) => setError("there was an error"));
  }, []);

  let output;
  if (error) {
    output = <div>Problem Loading Products</div>;
  } else if (product.length > 0) {
    output = product.map((item) => <Product key={item.id} product={item} />);
  } else {
    output = <div>There was no products!</div>;
  }

  return (
    <>
      <div>
        <div className="container z-10 mx-auto my-12 p-9">
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {output}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
