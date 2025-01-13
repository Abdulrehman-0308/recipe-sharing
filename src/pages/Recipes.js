import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const recipes = [
    {
      title: "Paneer Masala",
      image: "/img/images/img_1.jpg",
    },
    {
      title: "Tandoori chicken",
      image: "/img/images/img_2.jpg",
    },
    {
      title: "Chicken Biryani",
      image: "/img/images/img_3.jpg",
    },
    {
      title: "Korma",
      image: "/img/images/img_4.jpg",
    },
    {
      title: "Butter Chicken",
      image: "/img/images/img_5.jpg",
    },
    {
      title: "Fish Fry",
      image: "/img/images/img_6.jpg",
    },
    {
      title: "Chicken Tikka",
      image: "/img/images/img_7.jpg",
    },
    {
      title: "Mutton Biryani",
      image: "/img/images/img_8.jpg",
    },
    {
      title: "Samosa",
      image: "/img/images/img_9.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {/* <RecipeCard />  */}
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
