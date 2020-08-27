import React from 'react';
import DeletePet from './DeletePet';

class SinglePet extends React.Component {
  constructor() {
    super();
    this.state = {
      adopted: false,
    };
  }

  render() {
    const { pet } = this.props;
    const { handleDelete } = this.props;
    const { adopted } = this.state;

    return (
      <div className={adopted ? 'single-pet adopted' : 'single-pet'}>
        <h4>Name: {pet.name}</h4>
        <div>Description: {pet.description}</div>
        <div>Species: {pet.species}</div>
        <br />
        <div>Status: {adopted ? 'Adopted!' : 'Available for adoption'}</div>
        <br />
        <button onClick={() => this.setState({ adopted: !adopted })}>
          Toggle Status
        </button>
        <br />
        <DeletePet handleDelete={handleDelete} petId={pet.id} />
      </div>
    );
  }
}

export default SinglePet;
