import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DadosAtuais.css";

const DadosAtuais = ({ dadosAtuais }) => {
  return (
    <div className="grid-one">
      <div className="grid-two">
        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-location-crosshairs`}
            className="extra-data__icon"  
          />
          <h3 className="data-type">Latitude</h3>
          <h2 className="pressure-data">{dadosAtuais?.latitude.toFixed(2)}</h2>
        </div>

        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-location-crosshairs`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Longitude</h3>
          <h2 className="wind-data">{dadosAtuais?.longitude.toFixed(2)}</h2>
        </div>
      </div>
      <div className="grid-two">
        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-weight-scale`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Pressão</h3>
          <h2 className="pressure-data">{(dadosAtuais?.pressao/100).toFixed(2)} mb</h2>
        </div>

        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-wind`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Vento</h3>
          <h2 className="wind-data">{dadosAtuais?.velocidadeVento} kph</h2>
        </div>
      </div>
      <div className="grid-two">
        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-droplet`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Umidade</h3>
          <h2 className="wind-data">{dadosAtuais?.umidade} %</h2>
        </div>

        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-compass`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Direção Vento</h3>
          <h2 className="wind-data">
            {(() => {
            switch (dadosAtuais?.direcaoVento) {
              case "NE": return "NORDESTE";
              case "L": return "LESTE";
              case "SE": return "SUDESTE"
              case "S": return "SUL";
              case "SO": return "SUDOESTE";
              case "O": return "OESTE"; 
              case "NO": return "NOROESTE";
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
          <h2 className="wind-data">{dadosAtuais?.indiceUV}</h2>
        </div>

        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-bolt-lightning`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Intensidade Luz</h3>
          <h2 className="wind-data">{dadosAtuais?.intensidadeLuminosa.toFixed(2)} lux</h2>
        </div>
      </div>
    </div>
  );
};

export default DadosAtuais;
