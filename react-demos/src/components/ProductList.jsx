const ProductList = () => {
  const products = [
    { id: 1, name: "iPhone", price: 500 },
    { id: 2, name: "iPad", price: 700 },
    { id: 3, name: "MacBook", price: 1200 },
  ];
  return (
    <div>
      <h1>Product List are availabe:</h1>
      {products.map((products) => (
        <ul key={products.id}>
          <li>Product id: {products.id}</li>
          <li>Product Name: {products.name}</li>
          <li>Product Price: {products.price}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
