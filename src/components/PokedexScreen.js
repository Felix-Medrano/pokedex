import React from "react";
import Stats from "./Stats";

import falla from "../img/error.gif";
import cargando from "../img/loading.gif";
import "../css/screen.css";

function PokedexScreen({ pokemon, loading, error }) {
  if (error === true) {
    <div className="pokedex-screen">
      <img
        src={falla}
        alt="Hubo un error buscando tu pokemon"
        className="pokedex-no-screen"
      />
    </div>;
  }
  if (loading === true) {
    <div className="pokedex-screen">
      {console.log("Cargando")}
      <img
        src={cargando}
        alt="Cargando Pokemon"
        className="pokedex-no-screen"
      />
    </div>;
  }
  if (pokemon !== null) {
    return (
      <div className="pokedex-screen">
        <div className="pokemon-info">
          <h2 className="pokemon-name">
            {pokemon.name}<br/>
            #{pokemon.id}
          </h2>
          <img
            className="pokemon-img"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <ul className="pokemon-stats">
            {pokemon.stats.map((item) => (
              <Stats key={item.stat.name} item={item} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default PokedexScreen;
