import React from "react";
import Ingredient from "../components/Ingredient";

const IngredientList = ({ list }) => (
  <ul className="list">
    {list.map((ingredient, i) => (
      <Ingredient key={i} {...ingredient} />
    ))}
  </ul>
);

export default IngredientList;
