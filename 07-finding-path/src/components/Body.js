import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { RData } from "../config";
import { BiSearchAlt } from "react-icons/bi";
import CardShimmer from "./CardShimmer";

const filterData = (searchText, restaurantData) => {
 const filtered = restaurantData.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
 return filtered;
}

function Body() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filterRestaurantData, setFilterRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);
  
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
  }
//early return
if(!restaurantData) return;
  
  return (
   
    restaurantData?.length === 0 ? (
      <CardShimmer />
    ) : (
    <>
      <div className="search-hero">
      <div className="search custom-row">
        <h2>Great restaurants in your city, delivering to you</h2>
        <p>Set exact location to find the right restaurants near you.</p>
        <div className="form">
          <input type="text" placeholder="Search.." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={(e) => {
            const filteredData = filterData(searchText, restaurantData);
            setFilterRestaurantData(filteredData)
          }}>
           Find Food
          </button>
        </div>
      </div>
      </div>
      <div className="restaurant-list">
      {filterRestaurantData.length === 0 ? 
      <h2>No restaurant Found. Try different name</h2> : 
      (filterRestaurantData.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        }))
        }
      </div>
    </>
  ));
}

export default Body;
