import "./ExtraData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExtraData = ({ extraData }) => {
  return (
    <div className="grid-one">
      <div className="grid-two">
        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-location-crosshairs`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Latitude</h3>
          <h2 className="pressure-data">{extraData?.lat}</h2>
        </div>

        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-location-crosshairs`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Longitude</h3>
          <h2 className="wind-data">{extraData?.lon}</h2>
        </div>
      </div>
      <div className="grid-two">
        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-weight-scale`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Pressure</h3>
          <h2 className="pressure-data">{extraData?.pressure} mb</h2>
        </div>

        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-wind`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Wind</h3>
          <h2 className="wind-data">{extraData?.wind} kph</h2>
        </div>
      </div>
      <div className="grid-two">
        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-droplet`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Humidity</h3>
          <h2 className="wind-data">{extraData?.humidity} %</h2>
        </div>

        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-compass`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Wind Direction</h3>
          <h2 className="wind-data">
            {(() => {
            switch (extraData?.wind_dir) {
              case "NE": return "NORDESTE";
              case "E": return "LESTE";
              case "SE": return "SUDESTE"
              case "S": return "SUL";
              case "SW": return "SUDOESTE";
              case "W": return "OESTE"; 
              case "NW": return "NOROESTE";
              default : return "NORTE";
            }
            })()}
          </h2>
        </div>
      </div>
      <div className="grid-two">
        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-sun`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Ultra Violeta</h3>
          <h2 className="wind-data">{extraData?.uv} %</h2>
        </div>

        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-cloud-showers-heavy`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Precip</h3>
          <h2 className="wind-data">{extraData?.precip_mm} %</h2>
        </div>
      </div>
    </div>
  );
};

export default ExtraData;
