/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListErrors extends Component {
  render() {
    const { errors } = this.props;
    if (errors) {
      return (
        <>
          {
            Object.keys(errors).map(key => (
              <div key={key} className="notify">
                {' '}
                {errors[key]}
              </div>
            ))
          }
        </>
      );
    }
    return null;
  }
}

ListErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

ListErrors.defaultProps = { errors: [] };

export default ListErrors;
