import React, { useState } from 'react';
import './Tips.css';  // Make sure this path is correct for your project

const tips = [
  {
    title: "Plan Your Weekly Menu",
    content:
      "Take the stress out of mealtime by planning your weekly menu in advance. Knowing what you'll be cooking each day helps you shop efficiently, reduce food waste, and avoid the last-minute scramble to figure out what's for dinner. Consider dedicating a specific day for meal planning and grocery shopping to stay organized and save time throughout the week."
  },
  {
    title: "Prep Ahead of Time",
    content:
      "One of the most effective ways to streamline your cooking process is by prepping ingredients ahead of time. Spend a little time on a designated day chopping vegetables, marinating meat, and measuring out spices. Store them in containers or zip-lock bags, making it easy to grab and use throughout the week. This simple step can save you valuable minutes on busy weeknights."
  },
  {
    title: "Embrace One-Pot and Sheet Pan Meals",
    content:
      "Simplify your cleanup and cooking process by preparing one-pot or sheet pan meals. These recipes involve combining all ingredients in a single pot or on a baking sheet, minimizing the number of dishes to wash. Whether it's a hearty stew, a flavorful stir-fry, or a roasted vegetable medley, these meals can be extremely convenient, and delicious."
  },
  {
    title: "Organize Your Kitchen",
    content:
      "An organized kitchen can significantly contribute to a smoother cooking experience. Take the time to declutter your pantry, organize your spices, and arrange your utensils in a way that makes sense to you. Label containers, group similar items together, and keep frequently used tools within easy reach. This simple step will save you time and frustration while you're in the midst of preparing a meal."
  },
  {
    title: "Cook in Batches",
    content:
      "Cooking in batches is a game-changer when you’ve got a tight schedule. When preparing staples food items such as rice and pasta or proteins, double or triple the quantities and store the extras in the fridge or freezer. Having pre-cooked components on hand allows you to assemble quick and nutritious meals with minimal effort during the week."
  },
  {
    title: "Harness the Power of Slow Cookers and Instant Pots",
    content:
      "Investing in a slow cooker or Instant Pot can revolutionize your cooking routine. These appliances are excellent for preparing hearty soups, stews, and tender meats with minimal hands-on time. Throw ingredients into the pot in the morning, and return home to a delicious, fully cooked meal. The versatility of these appliances makes them a valuable addition to any kitchen."
  },
  {
    title: "Optimize Freezer-Friendly Meals",
    content:
      "Prepare meals that freeze well, such as casseroles, soups, and sauces. Portion them into individual containers, label with the date, and freeze. This way, you'll always have a variety of homemade, ready-to-heat options on hand for busy days."
  }
];

const Tips = () => {
  const [showAll, setShowAll] = useState(false);
  const initialVisibleCount = 3;

  const visibleTips = showAll ? tips : tips.slice(0, initialVisibleCount);

  return (
    <section id='tips'>
    <section className="tips-section">
      <h1 className="tips-heading">ChefMate's Quick Tips</h1>
      <div className="tips-container">
        {visibleTips.map((tip, index) => (
          <div key={index} className="tip-card">
            <h3>{tip.title}</h3>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>

      {!showAll && tips.length > initialVisibleCount && (
        <div className="read-more-wrapper">
          <button
            className="read-more-button"
            onClick={() => setShowAll(true)}
            aria-label="Read more tips"
          >
            Read More
          </button>
        </div>
      )}
    </section>
    </section>
  );
};

export default Tips;
