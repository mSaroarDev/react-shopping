import Product from "./Product";

const ProductList = () => {
  return (
    <>
      <div>
        <div className="container z-10 mx-auto my-12 p-9">
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
