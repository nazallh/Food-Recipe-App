import React, { useEffect, useState } from 'react';
import './RecipeSection.css';
import chefchoice from '../images/chefchoice.png'

const Card= ({loading,recipes,setSelectedRecipe}) => {
   

    return (
        <section id="recipes" className="recipe-section">
        <div class="chef-choice-header">
  <img src={chefchoice} alt="Chef’s Choice Logo" class="center-image" />
</div>

            {loading ? (
                <p>Loading recipes...</p>
            ) : (
                <div className="recipe-grid">
                    {recipes?.map((meal) => (
                        <div key={meal.idMeal} onClick={()=>setSelectedRecipe(meal)} className="recipe-card">
                            <img src={meal.image} alt={meal.strMeal} />
                            <h3>{meal.name}</h3>
                            <p><strong>Category:</strong> {meal.cuisine}</p>
                            <p><strong>Rating:</strong>  <strong>{meal.rating}</strong>⭐</p>
                            <a href={meal.strSource || meal.strYoutube} target="_blank" rel="noreferrer">
                                View Recipe
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Card;
