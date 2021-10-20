import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => setAllPokemon(data))
  }, []);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function addPokemon(newPokemon) {
    setAllPokemon([...allPokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search search={search} handleSearchChange={handleSearchChange} />
      <br />
      <PokemonCollection allPokemon={allPokemon} search={search} />
    </Container>
  );
}

export default PokemonPage;
