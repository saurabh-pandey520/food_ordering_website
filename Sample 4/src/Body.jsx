import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "./Utils/useOnlinestatus";


const Body = () => {
  const [listofResturant, setListofResturant] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6109026&lng=77.1149472&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setListofResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  const filteredRestaurants = listofResturant.filter((restaurant) => {
    return restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const onlinestatus = useOnlinestatus();
  if(onlinestatus==false) return <h1> Looks like you are offline check your internet connection</h1>


  if (listofResturant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          placeholder="Search restaurants..."
        />
        <button onClick={() => setSearchQuery("")}>Clear</button>
      </div>
      <div className="res-container">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant,index) => (
                        
            <Link key = {index}to={`/restaurants/${restaurant.info.id}`}>
  <Resturantcontainer resdata={restaurant} />
</Link>



          ))
        ) : (
          <div>No matching restaurants found</div>
        )}
      </div>
    </div>
  );
};

const Resturantcontainer = ({ resdata }) => {
  const url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
  const url2 = resdata.info.cloudinaryImageId;

  return (
    <div className="res-card">
      <img className="res-img" src={url + url2} alt={resdata.info.name} />
      <h1 className="res-card h3">{resdata.info.name}</h1>
      <h1 className="res-card h3">{resdata.info.cuisines}</h1>
      <h1 className="res-card h1">Average Rating {resdata.info.avgRating}</h1>
      <h1 className="res-card h4">{resdata.info.costForTwo}</h1>
    </div>
  );
};

export default Body;
