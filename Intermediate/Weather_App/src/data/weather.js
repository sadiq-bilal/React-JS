const weatherData = {
  Hyderabad: {
    city: "Hyderabad",
    country: "India",

    current: {
      temperature: 32,
      condition: "Partly Cloudy",
      icon: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
      feelsLike: 35,
      humidity: 58,
      wind: 12,
    },

    highlights: {
      maxTemp: 33,
      minTemp: 24,
      sunrise: "6:10 AM",
      sunset: "6:42 PM",
      visibility: 10,
    },

    forecast: [
      {
        day: "Today",
        condition: "Partly Cloudy",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
        max: 33,
        min: 24,
      },
      {
        day: "Tue",
        condition: "Sunny",
        icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
        max: 34,
        min: 25,
      },
      {
        day: "Wed",
        condition: "Cloudy",
        icon: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
        max: 32,
        min: 24,
      },
      {
        day: "Thu",
        condition: "Rainy",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
        max: 31,
        min: 23,
      },
      {
        day: "Fri",
        condition: "Cloudy",
        icon: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
        max: 30,
        min: 23,
      },
      {
        day: "Sat",
        condition: "Sunny",
        icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
        max: 33,
        min: 24,
      },
      {
        day: "Sun",
        condition: "Partly Cloudy",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
        max: 32,
        min: 24,
      },
    ],

    airQuality: {
      index: 42,
      status: "Good",
      description:
        "Air quality is satisfactory and poses little or no risk.",
    },

    details: {
      humidity: "58%",
      windSpeed: "12 km/h",
      pressure: "1012 hPa",
      visibility: "10 km",
      uvIndex: "6 (High)",
    },
  },

  // ================= MUMBAI =================

  Mumbai: {
    city: "Mumbai",
    country: "India",

    current: {
      temperature: 29,
      condition: "Rainy",
      icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
      feelsLike: 32,
      humidity: 72,
      wind: 18,
    },

    highlights: {
      maxTemp: 30,
      minTemp: 25,
      sunrise: "6:20 AM",
      sunset: "7:05 PM",
      visibility: 8,
    },

    forecast: [
      {
        day: "Today",
        condition: "Rainy",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
        max: 30,
        min: 25,
      },
      {
        day: "Tue",
        condition: "Cloudy",
        icon: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
        max: 31,
        min: 25,
      },
      {
        day: "Wed",
        condition: "Rainy",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
        max: 29,
        min: 24,
      },
      {
        day: "Thu",
        condition: "Rainy",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
        max: 28,
        min: 24,
      },
      {
        day: "Fri",
        condition: "Cloudy",
        icon: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
        max: 30,
        min: 25,
      },
      {
        day: "Sat",
        condition: "Sunny",
        icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
        max: 31,
        min: 25,
      },
      {
        day: "Sun",
        condition: "Cloudy",
        icon: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
        max: 30,
        min: 24,
      },
    ],

    airQuality: {
      index: 55,
      status: "Moderate",
      description:
        "Air quality is acceptable but some pollutants may affect sensitive people.",
    },

    details: {
      humidity: "72%",
      windSpeed: "18 km/h",
      pressure: "1008 hPa",
      visibility: "8 km",
      uvIndex: "5 (Moderate)",
    },
  },
};

export default weatherData;