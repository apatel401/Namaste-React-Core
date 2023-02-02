import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import CardShimmer from "./CardShimmer";
import useRestaurant from "../utils/useRestaurant";

function RestaurantMenu() {
  const { resId } = useParams();
const restaurant = useRestaurant(resId)

  return !restaurant ? (
    <CardShimmer />
  ) : (
    <div className="menu">
      <div className="rest-menu-details">
        <div className="rest-menu-img">
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        </div>
        <div className="rest-menu-main">
          <h2>{restaurant?.name}</h2>
          <h3>{restaurant?.area}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRating} stars</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
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
  );
}

export default RestaurantMenu;
