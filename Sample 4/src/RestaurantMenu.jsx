console.log("RestaurantMenu Component Rendered");

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import mockMenu from "./Utils/mockMenu"; // ✅ path correct (capital U)

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // ✅ LOAD MOCK DATA
  useEffect(() => {
    setResInfo(mockMenu.data);
  }, []);

  if (!resInfo) {
    return <Shimmer />;
  }

  // 🔹 Restaurant Info
  const restaurantInfo =
    resInfo?.cards
      ?.find((c) => c?.card?.card?.info)
      ?.card?.card?.info || {};

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    restaurantInfo;

  // 🔹 Menu Items (SAFE – no hard index)
  const regularCards =
    resInfo?.cards
      ?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards = regularCards
    .map((c) => c?.card?.card?.itemCards)
    .flat()
    .filter(Boolean);

  console.log("ITEM CARDS 👉", itemCards);

  return (
    <div className="menu">
      {/* Restaurant Header */}
      <div className="menu-header">
        <img
  src="https://logos-world.net/wp-content/uploads/2021/10/Pizza-Hut-Logo.png"
  alt={name}
  className="restaurant-image"
/>

        
        <h1>{name}</h1>
        <p>{cuisines?.join(", ")}</p>
        <p>{costForTwoMessage}</p>
      </div>

      <h2>Menu</h2>

      {/* Menu List */}
      <ul>
        {itemCards.map((item) => {
          const info = item.card.info;
          const price =
            (info.price ?? info.defaultPrice) / 100;

          return (
            <li key={info.id} className="menu-item">
              <img
  src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU="
  alt={name}
  className="restaurant-image"
/>



              <div>
                <h3>{info.name}</h3>
                <p>₹{price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
