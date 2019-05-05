import React from 'react';
import PropTypes from 'prop-types';

const Storage = ({ tipoRecurso }) => {
  console.log('Storage');
  /*
    addToLocalStorage() {

    }

    removeFromLocalStorage() {

    }
    */
};

Storage.propTypes = {
  tipoRecurso: PropTypes.string,
  removeFromLocalStorage: PropTypes.func,
};

export default Storage;
