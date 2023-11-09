import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DadosArduino.css";

const DadosArduino = ({ dadosAtuais }) => {
  return (
    <div className="grid-one">
      <div className="grid-two">
        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-weight-scale`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Pressão</h3>
          <h2 className="pressure-data">{dadosAtuais?.pressao} mb</h2>
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
            icon={`fa-solid fa-wind`}
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
          <h2 className="wind-data">{dadosAtuais?.indiceUV} %</h2>
        </div>

        <div className="extra-data">
          <FontAwesomeIcon
            icon={`fa-solid fa-bolt-lightning`}
            className="extra-data__icon"
          />
          <h3 className="data-type">Intensidade Luz</h3>
          <h2 className="wind-data">{dadosAtuais?.intensidadeLuminosa} %</h2>
        </div>
      </div>
    </div>
  );
};

export default DadosArduino;
