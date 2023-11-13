import "./ClimaAtual.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Function to find the correct icon for the current weather condition
const findIcon = (condition) => {
  let icon;
  switch (condition) {
    case "Nublado":
      icon = "fa-cloud";
      break;
    case "Ensolarado":
      icon = "fa-sun";
      break;
    case "Entre Nuvens":
      icon = "fa-cloud-sun";
      break;
    case "Chovendo":
      icon = "fa-cloud-showers-heavy";
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
      <div className="current-weather">
        <FontAwesomeIcon
          icon={`fa-solid ${findIcon(condition)}`}
          className="current-weather__icon"
        />
        <h3 className="current-weather__text">{condition}</h3>
      </div>
    </div>
  );
};

export default ClimaAtual;
