console.log("RestaurantMenu Component Rendered");
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "./Utils/Constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null); // State to handle errors
  const { resId } = useParams();
  
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error(`Failed to fetch menu: ${response.status}`);
      }
      const json = await response.json();
      setResInfo(json.data);
    } catch (err) {
      console.error("Error fetching menu:", err);
      setError(err.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Safely access nested properties with optional chaining and fallbacks
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  console.log(itemCards);

  return (
    <div className="menu">
      {/* Restaurant Image */}
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
        className="restaurant-image"
      />
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          const price = item.card.info.price / 100 || item.card.info.defaultPrice / 100;
          return (
            <li key={item.card.info.id}>
              {/* Item Image */}
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                alt={item.card.info.name}
                className="item-image"
              />
              {item.card.info.name} - {"Rs."}
              {price || "N/A"} {/* Fallback if price is missing */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;