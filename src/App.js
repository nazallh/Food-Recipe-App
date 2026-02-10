import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Tips from './components/Tips';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';
import RecipeSection from './components/RecipeSection';
import { useEffect, useState } from 'react';
import Card from './components/Card'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(recipes);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (err) {
        console.error('Error fetching recipes:', err);
      } finally {
        setLoading(false)
      }
    };

    fetchRecipes();
  }, []);


  return (
    <>
      <Navbar />
      <Home />
      
        < Searchbar setSearch={setSearch}/> 
     

      {!selectedRecipe ? (
      <RecipeSection loading={loading} recipes={filteredRecipes} setSelectedRecipe={setSelectedRecipe}/>

      ):
      (
      <Card recipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe}/>

      )}
      <Tips />
      <Footer />
      

    </>
  );
}

export default App;
