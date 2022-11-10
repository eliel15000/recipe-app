import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index + " " + ing.text}>
            <span>{ing.text}</span>
          </li>
        ))}
      </ul>
      <p className={style.caloriesP}>Calories: {Math.round(calories)}</p>
      <img className={style.image} src={image} alt="Food Img" />
    </div>
  );
};

export default Recipe;
