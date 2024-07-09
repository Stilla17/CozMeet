import React from "react";
import img1 from "../../assets/images/img1.jpg";

function InfoUser() {
  return (
    <div className="max-w-[20%] bg-white rounded-xl shadow-md overflow-hidden ">
      <div className="relative">
        <img className="h-48 w-full object-cover" src={img1} alt="background" />
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-white rounded-full">
          <img
            className="w-full h-full rounded-full object-cover"
            src={img1}
            alt="profile"
          />
        </div>
      </div>
      <div className="p-6">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Reinhard Van Zry</h2>
          <p className="text-gray-500">@Reinhard_</p>
        </div>
        <div className="mt-4 flex justify-between text-center rounded-lg  bg-gray-200 gap-4 px-4 py-2">
          <div>
            <h3 className="text-lg font-medium">2022</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">590</h3>
            <p className="text-gray-500">Following</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">250</h3>
            <p className="text-gray-500">Post</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            My Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoUser;
