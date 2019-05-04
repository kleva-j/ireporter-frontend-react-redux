import React from 'react';
import PropTypes from 'prop-types';
import Incident from './incident';

const IncidentWrapper = (props) => {
  const { incidents } = props;

  const checkIfEmpty = () => {
    const container = Object.keys(incidents);
    if (container.length === 0) return true;
    return false;
  };

  const IncidentList = [incidents];

  return (
    <>
      {!(checkIfEmpty()) ? IncidentList.map(({ id, type, createdOn, comment, status }) => (
        <Incident
          key={id} id={id} type={type}
          createdOn={createdOn} comment={comment} status={status} />
      )) : <div className="t-c">You have not created any record yet</div>}
    </>
  );
};

IncidentWrapper.propTypes = {
  incidents: PropTypes.object.isRequired,
};

export default IncidentWrapper;
