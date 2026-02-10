import React from 'react';
import './Card.css';

function Card({ recipe ,setSelectedRecipe}) {

  const handleBackClick = (e) => {
    e.preventDefault()
setSelectedRecipe(null)
  };

  return (
    <div className="card">
      {/* Left side */}
      <div className="card-left">
        <img src={recipe.image} alt={recipe.name} />
        <div className="basic-info">
          <h2>{recipe.name}</h2>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</p>
          <p><strong>Rating:</strong> {recipe.rating} ⭐</p>
        </div>
      </div>

      {/* Right side */}
      <div className="card-right">
        <div className='button'>
          <button onClick={handleBackClick} className='btn'><strong>✖</strong></button>
        </div>
        <div className="ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="instructions">
          <h3>Instructions:</h3>
          <ol>
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="time-info">
          <p>
            <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins &nbsp;
            <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default Card;
