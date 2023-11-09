import { useState, useEffect } from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cloudImg            from "./assets/cloud.jpg";
import nightImg            from "./assets/night.jpg";

import { CurrentWeather }  from "./Components/WeatherAPI/CurrentWeather";
import ExtraData           from "./Components/WeatherAPI/ExtraData";
import TempChart           from "./Components/WeatherAPI/TempChart";

import { ClimaAtual }      from "./Components/OficinasAPI/ClimaAtual";
import DadosArduino        from "./Components/OficinasAPI/DadosAtuais";
import Grafico             from "./Components/OficinasAPI/Grafico";

function App() {
  const [weather, setWeather] = useState({});
  const [clima, setClima] = useState({});
  const [toggle, setToggle] = useState(true);

  // Change the background image when the toggle state changes
  useEffect(() => {
   document.body.style = `background-image:  linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${toggle ? cloudImg : nightImg});`
  }, [toggle]);

  // Check if time is day or night
  useEffect(() => {
    const hour = new Date().getHours();
    const isDay = hour >=6 && hour < 18; 
    setToggle(isDay);
  }, []);

  // import the API key from .env file
  const apiKey = import.meta.env.VITE_API_KEY;

  // Fetch weather data from the weather API using location from the search bar
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Curitiba&days=3&aqi=no&alerts=yes`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Fetch weather data from the Oficinas API
  useEffect(() => {
    fetch(
      `https://api-oficinas.onrender.com/sensores/10`
    )
      .then((response) => response.json())
      .then((data) => {
        setClima(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  

  // Store the data in an object
  const dadosAtuais = {
    altitude:                 clima[0]?.altitude, 
    latitude:                 clima[0]?.latitude,
    longitude:                 clima[0]?.longitude, 
    temperatura:              clima[0]?.temperatura, 
    pressao:                  clima[0]?.pressao, 
    umidade:                  clima[0]?.umidade, 
    velocidadeVento:          clima[0]?.velocidadeVento, 
    direcaoVento:             clima[0]?.direcaoVento, 
    indiceUV:                 clima[0]?.indiceUV,
    intensidadeLuminosa:      clima[0]?.intensidadeLuminosa,
    chuva:                    clima[0]?.chuva,
    volumeChuva:              clima[0]?.volumeChuva,
    porcentagemBaterias:      clima[0]?.porcentagemBaterias,
    tensãoEletricaPlacaSolar: clima[0]?.tensãoEletricaPlacaSolar,
    orientacaoPlacaSolar:     clima[0]?.orientacaoPlacaSolar
  };

  // Store the current weather data in an object
  const currentData = {
    temp:     weather?.current?.temp_c,
    location: weather?.location?.name,
    date:     weather?.location?.localtime,
    icon:     weather?.current?.condition?.icon,
    text:     weather?.current?.condition?.text,
  };

  // Store the extra weather data in an object
  const extraData = {
    lat:       weather?.location?.lat,
    lon:       weather?.location?.lon,
    pressure:  weather?.current?.pressure_mb,
    wind:      weather?.current?.wind_kph,
    wind_dir:  weather?.current?.wind_dir,
    humidity:  weather?.current?.humidity,
    uv:        weather?.current?.uv,
    precip_mm: weather?.current?.precip_mm,
  };

  

  // Store the hourly temperature data in an array
  const temps = [];
  weather?.forecast?.forecastday[0].hour.map((hour) => {
    temps.push(hour.temp_c);
  });

  // Filter the hourly temperature data to get the temperature every 3 hours
  const eightTemps = temps.filter((_, i) => i % 3 === 0);

  // Add the last temperature to the array
  const nineTemps = [...eightTemps, temps[temps.length - 1]];

  return (
    <div className="App">
      <nav className="nav">
        <div className="logo">
          <FontAwesomeIcon
            icon="fa-brands fa-skyatlas"
            className="logo__icon"
          />
          <h1 className="logo__text">Oficinas</h1>
        </div>
        <FontAwesomeIcon
          icon="fa-solid fa-circle-half-stroke"
          className="switch-mode"
          onClick={() => {
            setToggle(!toggle);
          }}
          style={{
            transform: toggle ? "scaleX(1)" : "scaleX(-1)",
          }}
        />
      </nav>
      <div className="grid-two">
        <div className="grid-one">
          <h1>Weather API</h1>
          <CurrentWeather weatherData={currentData} />
          <ExtraData extraData={extraData} />
          <TempChart tempsData={nineTemps} />   
        </div>

        <div className="grid-one">
          <h1>Arduino</h1>
          <ClimaAtual data={dadosAtuais} />
          <DadosArduino dadosAtuais={dadosAtuais} />
          <Grafico data={clima} />
        </div>
        
      </div>
      
      {/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
    </div>
    
  );
}

export default App;
