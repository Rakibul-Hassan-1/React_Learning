import React from "react";
const myName = "Rakibul Hassan";
const frindNames = ["Rakib ", "Rakibul ", "Rakibul Hassan"];
const multi = (a, b) => a * b;

const Calculate = () => {
  return (
    <div>
      <p>Name: {myName}</p>
      <p>My Friends: {frindNames}</p>
      <h1>Addition:</h1>
      <p>2 + 2 = {2 + 2}</p>
      <h1>Multipication:</h1>

      <p>2 * 2 = {multi(2, 2)}</p>
    </div>
  );
};

export default Calculate;
