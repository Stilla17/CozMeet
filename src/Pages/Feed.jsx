import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import SlideSlick from "../Components/SliderContent/SlideSlick";

function Feed() {
  return (
    <div className="w-full mx-auto">
      <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 mb-6">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://via.placeholder.com/50" // Replace with the actual profile picture URL
            alt="Profile"
          />
          <div className="ml-3">
            <span className="block font-bold text-lg">Terry Torff</span>
            <span className="block text-gray-500 text-sm">
              23 Aug at 4:21 PM
            </span>
          </div>
        </div>
        <div className="mt-4 mx-auto">
          <SlideSlick />
        </div>
        <div className="mt-4 flex justify-between items-center text-gray-500">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <FaRegHeart />
              <span>30</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaRegComment />
              <span>12</span>
            </div>
            <div className="flex items-center space-x-1">
              <PiShareFat />
              <span>5</span>
            </div>
          </div>
          <button className="text-blue-500 font-semibold">View Comments</button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
