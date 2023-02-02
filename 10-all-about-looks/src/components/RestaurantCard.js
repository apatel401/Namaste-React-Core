import React from 'react'
import { IMG_CDN_URL } from '../config'

function RestaurantCard({
    name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) {


  return (
    <div className="w-52 m-2.5 p-2.5">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className='font-semibold text-md'>{name}</h2>
      <h3 className='font-normal text-sm mb-2'>{cuisines.join(", ")}</h3>
      <h4 className='font-semibold text-xs text-pinky'>{lastMileTravelString} minutes</h4>
    </div>
  )
}

export default RestaurantCard
