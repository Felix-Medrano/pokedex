import React from 'react'

function Stats({ item }) {
  return (
    <li className="pokemon-stat">
      <span className="stat-name">
        <b>{item.stat.name}: </b>
      </span>
      <span>{item.base_stat}</span>
    </li>
  );
}

export default Stats;