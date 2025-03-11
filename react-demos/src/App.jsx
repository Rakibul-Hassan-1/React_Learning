import { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
    document.title = `You clicked ${value} times`;
  }, [value]);

  return (
    <div>
      {/* <Greeting /> */}
      {/* <Product /> */}
      {/* <Loop /> */}
      {/* <UserInfo /> */}
      {/* <ProductList /> */}
      {/* <Props /> */}
      {/* <Person /> */}
      {/* <PassCheckComponent /> */}
      {/* <Cart /> */}
      {/* <Weather /> */}
      {/* <UserStatus loogedIn={1} isAdmin={1} /> */}
      {/* <CustomCss /> */}
      {/* <State /> */}
      {/* <AddFriend /> */}
      {/* <ExampleOne /> */}
      {/* {<Shoppinglist />} */}
      {/* {<CopyInput />} */}
      {/* {<Switch />} */}
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Clcik Me</button>
    </div>
  );
};

export default App;
