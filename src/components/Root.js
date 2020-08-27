import React from 'react';
import PetList from './PetList';
import axios from 'axios';

import samplePets from '../petdata';

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      loadingData: true,
      error: {},
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    try {
      //this.setState({ loadingData: true });
      const response = await axios.get('/api/pets');
      this.setState({ pets: response.data });
      this.setState({ loadingData: false });
    } catch (error) {
      this.setState({ error: error, loadingData: false });
    }
  }

  handleDelete(id) {
    const { pets } = this.state;
    this.setState({
      pets: pets.filter((pet) => pet.id !== id),
    });
  }

  render() {
    const { error, loadingData } = this.state;
    const { pets } = this.state;
    const handleDelete = this.handleDelete;
    if (error.stack) {
      return (
        <div>
          <p>Error: {error.stack}</p>
        </div>
      );
    } else if (loadingData) {
      return <div> Loading</div>;
    } else {
      return (
        <div>
          <h1>Adoption Center</h1>
          <PetList pets={pets} handleDelete={handleDelete} />
        </div>
      );
    }
  }
}

export default Root;
