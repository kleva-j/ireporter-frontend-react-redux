import React from 'react';
import PropTypes from 'prop-types';
import Toast from 'toasted-notes';

const ListErrors = (props) => {
  const { errors } = props;
  if (errors) {
    return (
      <>
        {
          Object.keys(errors).map(key => Toast.notify(errors[key]))
        }
      </>
    );
  }
  return null;
};

ListErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

ListErrors.defaultProps = { errors: [] };

export default ListErrors;
