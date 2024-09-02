import React, { useEffect, useState } from "react";
import { AdviceData, UserTypes, WeatherConditions } from "../utils/AdviceData";
import NextDayForecast from "./NextDayForecast";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiFog,
  WiSnow,
  WiDayCloudy,
} from "react-icons/wi";
import {
  IoIosArrowBack,
  IoIosArrowRoundDown,
  IoIosArrowRoundUp,
} from "react-icons/io";

const weatherIcons: { [key: string]: JSX.Element } = {
  Sunny: <WiDaySunny size={40} />,
  Cloudy: <WiCloud size={40} />,
  "Partly Cloudy": <WiDayCloudy size={40} />,
  Raining: <WiRain size={40} />,
  Storm: <WiThunderstorm size={40} />,
  Fog: <WiFog size={40} />,
  Snow: <WiSnow size={40} />,
  Clear: <WiDaySunny size={40} />,
};
const weatherBackgroundColors: { [key: string]: string } = {
  Sunny: "bg-yellow-500",
  Cloudy: "bg-gray-400",
  "Partly Cloudy": "bg-gray-400",
  Rainy: "bg-blue-700",
  Storm: "bg-gray-800",
  Foggy: "bg-gray-500",
  Snowy: "bg-blue-300",
  Clear: "bg-blue-600",
};

const weatherConditions: WeatherConditions[] = [
  "Sunny",
  "Cloudy",
  "Partly Cloudy",
  "Rainy",
  "Storm",
  "Foggy",
  "Snowy",
  "Clear",
];

interface MainWeatherContentProps {
  userType: UserTypes;
}
const MainContent: React.FC<MainWeatherContentProps> = ({ userType }) => {
  const [weather, setWeather] = useState({
    description: "Rainy" as WeatherConditions,
    currentDate: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }),
    hourlyForecast: [
      { time: "8am", condition: "Raining" },
      { time: "10am", condition: "Cloudy" },
      { time: "12pm", condition: "Sunny" },
      { time: "2pm", condition: "Partly Cloudy" },
      { time: "4pm", condition: "Sunny" },
      { time: "6pm", condition: "Cloudy" },
      { time: "8pm", condition: "Raining" },
      { time: "10pm", condition: "Clear" },
      { time: "12am", condition: "Clear" },
    ],
    recentlySearchedCities: ["Jaipur", "New Delhi", "Mumbai"],
  });
  const [advice, setAdvice] = useState("");
  const [currentWeatherIndex, setCurrentWeatherIndex] = useState(3);

  const handleWeatherClick = () => {
    const nextIndex = (currentWeatherIndex + 1) % weatherConditions.length;
    setCurrentWeatherIndex(nextIndex);

    setWeather((prevWeather) => ({
      ...prevWeather,
      description: weatherConditions[nextIndex],
    }));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWeather((prevWeather) => ({
        ...prevWeather,
        currentDate: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      }));
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const weatherAdvice = AdviceData.find(
      (item) => item.weather === weather.description
    );
    const userAdvice = weatherAdvice?.users.find(
      (user) => user.name === userType
    );
    if (userAdvice) {
      setAdvice(userAdvice.advice);
    } else {
      setAdvice("No specific advice available for this weather condition.");
    }
  }, [userType, weather.description]);

  return (
    <div className="flex-1 p-6 bg-gray-100 text-gray-900 shadow-lg w-full font-sans">
      <div
        className={`flex items-center text-center h-[140px] px-4 rounded 
        ${weatherBackgroundColors[weather.description] || "bg-gray-300"}`}
      >
        <h1
          className="w-full sm:text-2xl md:text-3xl lg:text-3xl font-bold 
  text-center font-heading text-white"
        >
          {advice}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-start py-4">
        <div>
          <h2
            className="text-4xl font-bold cursor-pointer flex items-center"
            onClick={handleWeatherClick}
          >
            {weather.description}{" "}
            <IoIosArrowBack
              size={20}
              className="ml-2 animate-bounce-horizontal"
            />
          </h2>
          <div className="flex flex-row items-center justify-center mt-2">
            <span className="flex mr-2">
              <IoIosArrowRoundDown size={24} />
              9° -{" "}
            </span>
            <span className="flex">
              <IoIosArrowRoundUp size={24} />
              15°
            </span>
          </div>
        </div>
        <p className="text-md">{weather.currentDate}</p>
      </div>
      <div className="order-1 my-6">
        <h2 className="text-lg font-semibold pb-2 font-heading">
          Weather in Next Hours
        </h2>
        <div className="flex flex-wrap gap-4">
          {weather.hourlyForecast.map((forecast, index) => (
            <div
              key={index}
              className="bg-white text-center w-[140px] h-[120px] py-4 rounded shadow 
              flex flex-col items-center justify-center"
            >
              <div className=" text-gray-600 text-md mb-2">{forecast.time}</div>
              <div className="flex flex-col items-center justify-center">
                {weatherIcons[forecast.condition] || <WiDaySunny size={40} />}
                <div className="text-gray-700 text-lg font-semibold">
                  {forecast.condition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="order-2 py-6">
        <h2 className="text-lg font-semibold pb-2 font-heading">
          Recently Searched Cities
        </h2>
        <div className="flex flex-wrap gap-4">
          {weather.recentlySearchedCities.map((city, index) => (
            <div
              key={index}
              className="bg-white text-center w-[140px] h-[60px] py-4 rounded shadow"
            >
              <p className="font-medium">{city}</p>
            </div>
          ))}
        </div>
      </div>
      {/* mobile */}
      <div className="mb-4 order-3 md:hidden">
        <NextDayForecast />
      </div>
    </div>
  );
};

export default MainContent;
