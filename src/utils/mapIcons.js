import clearSun from "../assets/clear-sun.png";
import clearNight from "../assets/Clear-night.png";
import dayCloud from "../assets/cloudy-sun (1).png";
import nightCloud from "../assets/cloudy-moon.png";
import cloud from "../assets/cloud.png";
import brokenCloud from "../assets/broken-cloud.png";
import showerRain from "../assets/shower-rain.png";
import dayRain from "../assets/sun-rainy.png";
import nightRain from "../assets/rainy-night.png";
import storm from "../assets/storm.png";
import snow from "../assets/snow.png";
import mist from "../assets/mist.png";

const mapIcons = (icon) => {
  switch (icon) {
    case "01d": // clear sky - day
      return clearSun;
    case "01n": // clear sky - night
      return clearNight;
    case "02d": // few clouds - day
      return dayCloud;
    case "02n": // few clouds - night
      return nightCloud;
    case "03d":
    case "03n": // scattered clouds
      return cloud;
    case "04d":
    case "04n": // broken clouds
      return brokenCloud;
    case "09d":
    case "09n": // shower rain
      return showerRain;
    case "10d": // rain - day
      return dayRain;
    case "10n": // rain - night
      return nightRain;
    case "11d":
    case "11n": // thunderstorm
      return storm;
    case "13d":
    case "13n": // snow
      return snow;
    case "50d":
    case "50n": // mist
      return mist;
    default:
      return clearSun; // fallback icon
  }
};

export default mapIcons;
