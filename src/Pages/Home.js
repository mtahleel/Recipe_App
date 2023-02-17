import React, { useEffect, useState } from "react";
import styles from "../Styles/home.module.css";
import API from "../Utils";
import Card from "../Components/Card";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${API.ROOT_URL}?q=${input}&app_id=${API.APP_ID}&app_key=${API.APP_KEY}&type=public`
      );
      const data = await response.json();
      console.log(data);

      if (data) {
        console.log(data.hits);
        setRecipes(data.hits);
      }
    };

    fetchData();
  }, [input]);

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        className={styles.search}
        type="search"
        placeholder="Search a recipe"
        name="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className={styles.cards}>
        {recipes.map((recipe) => {
          return (
            <Card
              recipe={recipe}
              label={recipe.recipe.label}
              key={recipes.indexOf(recipe)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
