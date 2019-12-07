import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Form";
import Error from "./components/Error";
import Clima from "./components/Clima";

function App() {
  //State principal
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    //Prevenir ejecución
    if (city === "") return;

    const checkAPI = async () => {
      const appId = "eaec0b9e779cf13dedabf6d48893ba01";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},
    ${country}&appid=${appId}`;

      //Consultar la URL
      const answer = await fetch(url);
      const result = await answer.json();

      setResult(result);
    };

    checkAPI();
  }, [city, country]);

  const dataSearch = data => {
    //Validación de los campos
    if (data.city === "" || data.country === "") {
      setError(true);
      return;
    }
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  };

  //Caragar un componente si se cumple...
  let component;
  if (error) {
    component = <Error message="Ambos campos son obligatorios" />;
  } else if (result.cod === "404") {
    result = <Error message="La cidudad no existe en el registro" />;
  } else {
    component = <Clima result={result} />;
  }

  return (
    <div className="App">
      <Header titulo="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario dataSearch={dataSearch} />
            </div>

            <div className="col s12 m6">{component}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
