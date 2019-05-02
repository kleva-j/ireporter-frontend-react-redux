import React from 'react';
import Incident from './incident';

const IncidentWrapper = () => {
  const IncidentList = [];
  return (
    <>
      {IncidentList.map(({ id, type, createdOn, comment, status }) => (
        <Incident
          key={id} id={id} type={type}
          createdOn={createdOn} comment={comment} status={status} />
      ))}
    </>
  );
};

IncidentWrapper.propTypes = {

};

export default IncidentWrapper;
