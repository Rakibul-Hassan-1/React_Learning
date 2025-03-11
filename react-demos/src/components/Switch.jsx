import React from "react";

const Switch = () => {
  const [sw, setSw] = React.useState(false);
  return (
    <div>
      {sw ? <span>ON</span> : <span>OFF</span>}
      <br />
      <input type="text" key={sw ? "dark" : "light"} />
      <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  );
};
export default Switch;
