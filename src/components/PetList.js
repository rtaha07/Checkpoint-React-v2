import React from 'react';
import SinglePet from './SinglePet';

class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'all',
    };
  }
  render() {
    const { filter } = this.state;
    const { handleDelete } = this.props;
    const { pets } = this.props;

    const filteredPets = pets.filter((pet) => {
      switch (filter) {
        case 'all':
          return pet;
        case 'cats':
          return pet.species === 'cat';
        case 'dogs':
          return pet.species === 'dog';
      }
    });
    return (
      <div>
        <div>
          <label className="selectSpecies">Select Species: </label>
          <select
            onChange={(event) => {
              this.setState({ filter: event.target.value });
            }}
            value={filter}
            id="petId"
          >
            <option value="all">all</option>
            <option value="cats">cats</option>
            <option value="dogs">dogs</option>
          </select>
        </div>
        <div className="pet-list">
          {filteredPets.map((pet) => {
            return (
              <SinglePet handleDelete={handleDelete} key={pet.id} pet={pet} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PetList;
