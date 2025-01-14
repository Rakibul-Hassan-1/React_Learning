// import "../index.css";
const Button = () => {
  const handlClick = () => console.log(Math.round(Math.random() * 100));
  return (
    // <button onClick={() => console.log("You clicked me")}>Click Me</button>
    <div>
      <p>The value is: {handlClick()}</p>
      <button onClick={handlClick}>Click Me</button>
    </div>
  );
};

const CustomCss = () => {
  const style = {
    background: "lightblue",
    color: "",
    fontSize: "50px",
    padding: "20px",
    color: "darkblue",
  };
  return (
    <section style={style}>
      <h1>Basket</h1>
      {/* <FaShoppingCart />
      <FaComputer /> */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
        quos tenetur, nisi libero dolor, veritatis voluptas asperiores eveniet
        officiis magnam exercitationem, reiciendis praesentium eligendi aliquid.
        Blanditiis temporibus atque nemo?
      </p>
      <Button />
    </section>
  );
};

export default CustomCss;
