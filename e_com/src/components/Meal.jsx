import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

const Meal = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setItems(response.data.meals);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <section className="card" key={idMeal}>
      <img src={strMealThumb} alt={strMeal} />
      <section className="content">
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </section>
    </section>
  ));

  return <div className="items-container">{itemList}</div>;
};

export default Meal;
