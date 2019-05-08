import React from 'react';
import PropTypes from 'prop-types';
import Incident from './incident';

const IncidentWrapper = (props) => {
  const { incidents, getRecord } = props;
  const checkIfEmpty = () => {
    const container = Object.keys(incidents);
    if (container.length === 0) return true;
    return false;
  };
  const IncidentList = Object.values(incidents);
  return (
    <>
      {!(checkIfEmpty()) ? IncidentList.map(({ id, type, createdon, comment, status }) => (
        <Incident
          key={id} id={id} type={type}
          createdOn={createdon} comment={comment} status={status} getRecord={getRecord} />
      )) : <div className="t-c">You have not created any record yet</div>}
    </>
  );
};

IncidentWrapper.propTypes = {
  incidents: PropTypes.object.isRequired,
};

export default IncidentWrapper;
