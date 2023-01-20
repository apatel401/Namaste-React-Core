import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";

function RestaurantMenu(){
const {resId} = useParams();
const [restaurant, setRestaurant] = useState({});

useEffect(() => {
 getRestaurantMenu();
}, []);

const getRestaurantMenu = async() => {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=${resId}`);
    const json = await data.json();
    setRestaurant(json.data);
}
if(!restaurant) return;

    return(
        <div className="menu">
        <div>
          <h2>{restaurant?.name}</h2>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <h3>{restaurant?.area}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRating} stars</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
}

export default RestaurantMenu;