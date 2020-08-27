import React from 'react';
import axios from 'axios';

//const DeletePet = () => null;

const DeletePet = ({ handleDelete, petId }) => {
  return (
    <button
      className="delete-pet"
      onClick={async () => {
        try {
          await axios.delete(`/api/pets/${petId}`);
          handleDelete(petId);
        } catch (error) {
          console.log(error.message);
        }
      }}
    >
      Delete
    </button>
  );
};

export default DeletePet;
