import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Incident = (props) => {
  const { id, type, createdOn, comment, status } = props;
  const [, month, date] = (new Date(createdOn).toDateString()).split(' ');
  const [title] = comment.split('>>');
  let indicator;

  switch (status) {
    case 'Resolved':
      indicator = 'grn';
      break;
    case 'Rejected':
      indicator = 'red';
      break;
    case 'Under investigation':
      indicator = 'yel';
      break;
    default:
      indicator = '';
  }

  return (
    <li className="item list" data-id={id} data-type={type} id={id}>
      <div className="date t-c">
        {date}
        <br />
        {month}
      </div>
      <div className="grow-1">
        <Link to="/" className="pd-l">
          <span className="wrap bolder">{title}</span>
        </Link>
      </div>
      <div className="pd-l">
        <small className="pd-r-sm pd-l-sm">
          status:
          <i className={indicator}>{status}</i>
        </small>
      </div>
      <div className="edit">
        <span className="btn bd-grn bg-t mg-r">
          <Link to="/" className="grn">Edit</Link>
        </span>
        <span className="btn bd-red bg-t red" data-id={id} data-type={type}>Delete</span>
      </div>
    </li>
  );
};

Incident.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Incident;
