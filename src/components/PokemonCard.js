import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [sprite, setSprite] = useState('front')

  function handleClick() {
    setSprite(sprite === 'front' ? 'back' : 'front')
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={pokemon.sprites[sprite]} alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
