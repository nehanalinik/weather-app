import React from 'react'
import { WiDaySunny, WiCloud, WiThunderstorm, WiFog, WiDayCloudy } from "react-icons/wi";

const NextDayForecast = () => {
  return (
    <section className='mt-8'>
        <div className="mb-4">
          <h2 className="text-lg font-semibold font-heading">The Next Days Forecast</h2>
          <div className="flex justify-between mt-4 text-sm">
            <button className="px-3 py-1 bg-gray-400 rounded-full">
              5 days
            </button>
            <button className="px-2 py-1">14 days</button>
            <button className="px-2 py-1">30 days</button>
          </div>
        </div>
        <div className="space-y-4 py-2">
          {[
            {
              day: "Friday, April 21",
              weather: "Heavy Rain",
              tempLow: "9°",
              tempHigh: "16°",
              icon: <WiThunderstorm size={32} />,
            },
            {
              day: "Saturday, April 22",
              weather: "Fog",
              tempLow: "9°",
              tempHigh: "19°",
              icon: <WiFog size={32} />,
            },
            {
              day: "Sunday, April 23",
              weather: "Partly Cloudy",
              tempLow: "9°",
              tempHigh: "17°",
              icon: <WiDayCloudy size={32} />,
            },
            {
              day: "Monday, April 24",
              weather: "Sunny",
              tempLow: "9°",
              tempHigh: "16°",
              icon: <WiDaySunny size={32} />,
            },
            {
              day: "Tuesday, April 25",
              weather: "Cloudy",
              tempLow: "15°",
              tempHigh: "20°",
              icon: <WiCloud size={32} />,
            },
          ].map((forecast, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="text-2xl mr-4">{forecast.icon}</div>
                <div>
                  <p className="font-semibold">{forecast.day}</p>
                  <p className="text-sm">{forecast.weather}</p>
                </div>
              </div>
              <div>
              <p className="text-md font-semibold">{forecast.tempLow}</p>
              <p className="text-md font-semibold">{forecast.tempHigh}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default NextDayForecast