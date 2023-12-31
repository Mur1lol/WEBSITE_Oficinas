import "./ClimaAtual.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Function to find the correct icon for the current weather condition
const findIcon = (condition) => {
  let icon;
  switch (condition) {
    case "Clear":
      icon = "fa-cloud";
      break;
    case "Sunny":
      icon = "fa-sun";
      break;
    case "Mist":
      icon = "fa-cloud-meatball";
      break;
    case "Cloudy":
      icon = "fa-cloud";
      break;
    case "Partly cloudy":
      icon = "fa-cloud-sun";
      break;
    case "Overcast":
      icon = "fa-smog";
      break;
    case "Blizzard":
      icon = "fa-meteor";
      break;
    case "Fog":
      icon = "fa-smog";
      break;
    case "Light rain":
      icon = "fa-cloud-rain";
      break;
    case "Medium rain":
      icon = "fa-cloud-rain";
      break;
    case "Heavy rain":
      icon = "fa-cloud-showers-heavy";
      break;
    case "Light snow":
      icon = "fa-snowflake";
      break;
    case "Medium snow":
      icon = "fa-snowflake";
      break;
    case "Heavy snow":
      icon = "fa-icicles";
      break;
    default:
      icon = "fa-cloud";
  }
  return icon;
};

const ClimaAtual = ({ data }) => {
  const condition = data?.text;

  // Format the time and date
  const time = new Date().toLocaleTimeString("pt-br", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const date = new Date().toLocaleDateString("pt-br", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="current">
      <h1 className="current-temp">
        {data?.temperatura}
        <sup>°C</sup>
      </h1>
      <div className="location-date">
        <h2 className="location">Curitiba</h2>
        <h3 className="current-date">
          {time} - {date}
        </h3>
      </div>
    </div>
  );
};

export default ClimaAtual;
