const name = "John";
const date = new Date();
const Greeting = () => {
  return (
    <div>
      <h1>A element that dynamically displays a greeeting message</h1>
      <p>A element that dynamically display the current data</p>
      <h2>Hello, {name}</h2>
      <p>
        It is {date.getHours()}:{date.getMinutes()}
      </p>
    </div>
  );
};

export default Greeting;
