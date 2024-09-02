import React from "react";
import { FaMapMarkerAlt, FaWind } from "react-icons/fa";
import { UserTypes } from "../utils/AdviceData";
import NextDayForecast from "./NextDayForecast";

interface WeatherSidebarProps {
  userGroup: UserTypes;
  setUserGroup: (userGroup: UserTypes) => void;
}

const Sidebar: React.FC<WeatherSidebarProps> = ({
  userGroup,
  setUserGroup,
}) => {
  const handleUserGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserGroup(e.target.value as UserTypes);
  };

  return (
    <div className="w-full md:w-1/4 p-6 bg-gray-800 text-white">
      {/* User Group Dropdown */}
      <div className="w-full p-3 bg-gray-700 text-white rounded">
        <select
          value={userGroup}
          onChange={handleUserGroupChange}
          className="w-full outline-none bg-gray-700 text-white"
        >
          <option value="Event Planners">Event Planners</option>
          <option value="Farmers">Farmers</option>
          <option value="Travelers">Travelers</option>
        </select>
      </div>

      {/* Location Search Bar */}
      <div className="flex items-center my-8 p-2 border border-gray-500 rounded">
        <FaMapMarkerAlt className="text-xl mr-2" />
        <input
          type="text"
          placeholder="Search Location..."
          className="bg-transparent focus:outline-none w-full placeholder-gray-400"
        />
      </div>

      {/* Current Temperature */}
      <div className="text-center py-6 bg-gray-700 rounded">
        <h1 className="text-6xl font-bold pb-4">11°C</h1>
        <p className="text-lg flex justify-center items-center">
          <FaWind className="mr-2" />
          Southeast, 38.9 km/h
        </p>
        <div>Hyderabad, IN</div>
      </div>

      <div className="hidden md:block">
        <NextDayForecast />
      </div>
    </div>
  );
};

export default Sidebar;
