import React from "react";

const Product = () => {
  return (
    <div className="card w-100 bg-white shadow-xl">
      <figure>
        <img
          src="https://static-01.daraz.com.bd/p/b802b8ebb0a784ec791caa75e2d4de66.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h6 className="text-black">
          iPhone 14 Pro Max iOS 16 6.7 inches Super Retina
        </h6>
        <p className="text-sm text-gray-400">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <h6 className="font-bold">Price: $1,000</h6>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-outline btn-primary">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
