import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  });

  function handleFormChange(e) {
    const newFormData = {...formData, [e.target.name]: e.target.value};
    setFormData(newFormData);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const pokemonObj = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokemonObj)
    }
    fetch('http://localhost:3001/pokemon', options)
      .then(res => res.json())
      .then(data => addPokemon(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleFormChange} value={formData.name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleFormChange} value={formData.hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormChange}
            value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormChange}
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
