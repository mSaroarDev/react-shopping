import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import fetchCart from "../API/fetchCart";
import Loader from "./Loader";
import removeItem from "../API/removeItem";

const ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCart()
      .then((data) => {
        if (data?.msg === "success") {
          //   setItems(data);
          setItems(data?.data);
          //   console.log(items);
        }
      })
      .catch((err) => {
        <Loader />;
      });
  }, []);

  const handleRemoveItem = (productId) => {
    removeItem(productId)
      .then((data) => {
        if (data?.msg == "success") {
          const remainingItems = items.filter(
            (item) => item.product.id != productId
          );
          setItems(remainingItems);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="container col-span-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
            {items.map((item) => (
              <CartItem key={item.id} item={item} remove={handleRemoveItem} />
            ))}
          </div>
        </div>

        <div className="card shadow-xl h-44 w-100 bg-white">
          <div className="card-body">
            <h2 className="card-title">Total Item: 10</h2>
            <h6>Total Price: $1,000</h6>
            <div className="card-actions">
              <button className="btn btn-sm my-4 btn-primary btn-outline">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
