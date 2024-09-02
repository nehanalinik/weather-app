export type UserTypes = 'Event Planners' | 'Farmers' | 'Travelers';
export type WeatherConditions = 'Sunny' | 'Rainy' | 'Storm' | 'Foggy' | 'Snowy' | 'Cloudy' | 'Partly Cloudy' | 'Clear';

export interface UserAdvice {
  id: number;
  name: UserTypes;
  advice: string;
}

export interface WeatherAdvice {
  id: number;
  weather: WeatherConditions;
  users: UserAdvice[];
}
export const AdviceData = [
  {
    id: 1,
    weather: "Sunny",
    users: [
      {
        id: 1,
        name: "Event Planners",
        advice: "It’s a beautiful day! Perfect for outdoor events."
      },
      {
        id: 2,
        name: "Farmers",
        advice: "Good weather for harvesting crops. Ensure adequate water for your plants."
      },
      {
        id: 3,
        name: "Travelers",
        advice: "Great day for traveling. Enjoy the sunshine!"
      },
    ]
  },
  {
    id: 2,
    weather: "Rainy",
    users: [
      {
        id: 1,
        name: "Event Planners",
        advice: "Consider indoor venues as it will be raining. Outdoor events might be disrupted."
      },
      {
        id: 2,
        name: "Farmers",
        advice: "Rain will benefit your crops, but ensure that your fields have proper drainage."
      },
      {
        id: 3,
        name: "Travelers",
        advice: "Rain may cause delays. Pack your rain gear and plan accordingly."
      },
    ]
  },
  {
    id: 3,
    weather: "Storm",
    users: [
      {
        id: 1,
        name: "Event Planners",
        advice: "Heavy storms expected. Postpone outdoor events for the next few days."
      },
      {
        id: 2,
        name: "Farmers",
        advice: "Stormy weather could damage crops. Take protective measures."
      },
      {
        id: 3,
        name: "Travelers",
        advice: "Stormy weather ahead. Travel with caution, or reconsider your plans."
      },
    ]
  },
  {
    id: 4,
    weather: "Foggy",
    users: [
      {
        id: 1,
        name: "Event Planners",
        advice: "Foggy conditions may affect visibility for events. Ensure proper lighting."
      },
      {
        id: 2,
        name: "Farmers",
        advice: "Fog can affect crops; monitor your fields for any signs of mold or fungus."
      },
      {
        id: 3,
        name: "Travelers",
        advice: "Reduced visibility due to fog. Drive carefully and use fog lights if traveling."
      },
    ]
  },
  {
    id: 4,
    weather: "Snowy",
    users: [
      {
        id: 1,
        name: "Event Planners",
        advice: "Snowfall could impact event attendance. Consider rescheduling or moving indoors."
      },
      {
        id: 2,
        name: "Farmers",
        advice: "Snow can damage crops. Protect your fields and equipment from snow accumulation."
      },
      {
        id: 3,
        name: "Travelers",
        advice: "Snowy conditions can make travel hazardous. Be prepared for delays and icy roads."
      },
    ]
  },
  {
    id: 6,
    weather: "Cloudy",
    users: [
      {
        id: 1,
        name: "Event Planners",
        advice: "Cloudy weather is generally fine for outdoor events, but have a backup plan in case of rain."
      },
      {
        id: 2,
        name: "Farmers",
        advice: "Cloudy skies might indicate upcoming rain; ensure your crops are protected."
      },
      {
        id: 3,
        name: "Travelers",
        advice: "Cloudy skies might make for a dull day, but it’s still good for travel. Just keep an eye out for rain."
      },
    ]
  },
  {
    id: 7,
    weather: "Partly Cloudy",
    users: [
      {
        id: 1,
        name: "Event Planners",
        advice: "Partly cloudy weather is great for outdoor events, offering some shade and comfort."
      },
      {
        id: 2,
        name: "Farmers",
        advice: "Partly cloudy skies should keep your crops comfortable, but watch for any signs of changing weather."
      },
      {
        id: 3,
        name: "Travelers",
        advice: "Partly cloudy skies make for a pleasant travel day. Enjoy the mix of sun and shade."
      },
    ]
  },
  {
    id: 8,
    weather: "Clear",
    users: [
      {
        id: 1,
        name: "Event Planners",
        advice: "Clear skies are perfect for any outdoor event. No need for a backup plan!"
      },
      {
        id: 2,
        name: "Farmers",
        advice: "Clear skies mean lots of sun. Make sure your crops are well-watered."
      },
      {
        id: 3,
        name: "Travelers",
        advice: "Clear weather is ideal for traveling. Enjoy the perfect conditions!"
      },
    ]
  }
]