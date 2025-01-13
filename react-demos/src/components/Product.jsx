const Product = () => {
  const products = {
    name: "Banana",
    price: 0.29,
    description: "This is a yellow fruit.",
  };
  return (
    <div>
      <h1>This is Our Available Product's</h1>
      <p>
        {products.name}, {products.price}$, {products.description}
      </p>
    </div>
  );
};

export default Product;
