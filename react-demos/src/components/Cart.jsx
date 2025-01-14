const Cart = () => {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  return (
    <div>
      <h1>Cart</h1>
      {items.length >= 0 && <p>You have {items.length} items in your cart</p>}
      <h1>The items are: </h1>
      {items.map((items) => (
        <ul key={items}>
          <li>{items}</li>
        </ul>
      ))}
    </div>
  );
};
export default Cart;
