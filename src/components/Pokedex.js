import React, { useState, useEffect } from "react";
import PokedexScreen from "./PokedexScreen";
import PokemonForm from "./PokemonForm";

import "../css/pokedex.css";

function Pokedex() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const RandomId = Math.floor(Math.random() * 806 + 1);
  const [pokemonID, setPokemonId] = useState(RandomId);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [pokemonID]);

  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className={`light is-sky is-big ${loading && "is-animated"}`} />
          <div className="light is-red" />
          <div className="light is-yellow" />
          <div className="light is-green" />
        </div>
        <div className="pokedex-screen-container">
          {console.log("poke", pokemon, "loading", loading, "error", error)}
          <PokedexScreen pokemon={pokemon} loading={loading} error={error} />
        </div>
        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <div className="light is-blue is-medium" />
            <div className="light is-green is-large" />
            <div className="light is-orange is-large">a</div>
          </div>
        </div>
        <PokemonForm
         //TODO: modificar el input y hacerlo lista de pokes
          setPokemonId={setPokemonId}
          setLoading={setLoading}
          setError={setError}
        />
      </div>
      <div className="pokedex-right-front" />
      <div className="pokedex-right-back">
      </div>
    </div>
  );
}

export default Pokedex;
