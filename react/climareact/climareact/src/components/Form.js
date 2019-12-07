import React, { useState } from "react";

function Formulario({ dataSearch }) {
  //state del componente
  const [search, setSearch] = useState({
    city: "",
    country: ""
  });

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const checkWeather = e => {
    e.preventDefault();

    //pasar hacia el componente principal la búsqueda del usuario
    dataSearch(search);
  };

  return (
    <form onSubmit={checkWeather}>
      <div className="input-field col s12">
        <input type="text" name="ciudad" id="ciudad" onChange={handleChange} />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select onChange={handleChange} name="pais">
          <option value="">Selecciona un país</option>
          <option value="ES">España</option>
          <option value="AU">Australia</option>
          <option value="MX">México</option>
          <option value="CR">Costa Rica</option>
          <option value="ID">Indonesia</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          className="waver-effect waves-light btn-large
          btn-block yellow accent-4"
          value="Buscar Clima"
        />
      </div>
    </form>
  );
}

export default Formulario;
