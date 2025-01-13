const ProductList = () => {
  const products = [
    { id: 1, name: "iPhone", price: 500 },
    { id: 2, name: "iPad", price: 700 },
    { id: 3, name: "MacBook", price: 1200 },
  ];
  return (
    <div>
      <h1>Product List are available:</h1>
      {products.map((product) => (
        <ul key={product.id}>
          <li>Product id: {product.id}</li>
          <li>Product Name: {product.name}</li>
          <li>Product Price: {product.price}</li>
        </ul>
      ))}
  
    </div>
  );
};

export default ProductList;
