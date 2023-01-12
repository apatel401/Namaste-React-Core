import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RData } from "../config";
import { BiSearchAlt } from "react-icons/bi";

const filterData = (searchText, restaurantData) => {
return restaurantData.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))
}

function Body() {
  const [restaurantData, setRestaurantData] = useState(RData);
  const [searchText, setSearchText] = useState("");


  return (
    <div style={{ marginTop: "50px" }}>
      <div className="search">
        <h2>Great restaurants in your city, delivering to you</h2>
        <p>Set exact location to find the right restaurants near you.</p>
        <div className="form">
          <input type="text" placeholder="Search.." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={(e) => {
            const filteredData = filterData(searchText, restaurantData);
            setRestaurantData(filteredData)
          }}>
            <BiSearchAlt />
          </button>
        </div>
      </div>
      <div className="restaurant-list">
        {restaurantData.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
