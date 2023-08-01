import React from "react";

const CartItem = ({ item, remove }) => {
  return (
    <div>
      <div className="card card-side bg-white shadow-xl">
        <figure>
          <img
            className="w-40"
            src={item.product.image}
            alt={item.product.title}
          />
        </figure>
        <div className="card-body">
          <h6 className="text-black">{item.product.title}</h6>
          <h3 className="text-xl font-bold text-gray-700">
            Price: ${item.product.price}
          </h3>
          <div className="card-actions justify-end">
            <button
              onClick={() => remove(item.product.id)}
              className="btn btn-sm btn-primary btn-outline"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
