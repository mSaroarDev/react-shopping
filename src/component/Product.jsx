import React from "react";
import createCart from "../API/createCart";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const addToCart = () => {
    createCart(product.id)
      .then((data) => {
        if (data.data == "unauthorized") {
          navigate("/login");
        } else {
          if (data.msg == "success") {
            alert("Product added succesfully");
          }
        }
      })
      .catch((err) => console.log("there was an error"));
  };

  return (
    <div className="card w-100 bg-white shadow-xl">
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="card-body">
        <h6 className="text-black">{product.title}</h6>
        <p className="text-sm text-gray-400">{product.short_des}</p>
        <h6 className="font-bold">Price: ${product.price}</h6>
        <div className="card-actions justify-end">
          <button
            onClick={addToCart}
            className="btn btn-sm btn-outline btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
