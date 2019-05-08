/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { deleteSingleRecord } from '../../store/actions/viewSingleActions';

const Incident = (props) => {
  const { id, type, createdOn, comment, status, deleteRecord, getRecord } = props;
  const [, month, date] = (new Date(createdOn).toDateString()).split(' ');
  const [title] = comment ? comment.split('>>') : '';
  const path = (type === 'red-flag') ? 'red-flags' : 'interventions';
  const viewPageLink = `/incident/${type}/${id}`;
  const deletePostLink = `/${path}/${id}`;
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

  const deletePost = async () => {
    const shouldDelete = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (shouldDelete) {
      await deleteRecord(deletePostLink);
      await swal("Poof! Your incident record has been deleted!", { icon: "success" });
      await getRecord(path);
    } else {
      swal("Your record is safe!");
    }
  };

  return (
    <li className="item list" data-id={id} data-type={type} id={id}>
      <div className="date t-c">
        {date}
        <br />
        {month}
      </div>
      <div className="grow-1 move-left">
        <Link to={viewPageLink} className="pd-l">
          <span className="wrap bolder left">{title}</span>
        </Link>
        <div className="pd-l">
          <small className="pd-r-sm pd-l-sm">
            status:
            <i className={indicator}>{status}</i>
          </small>
        </div>
      </div>
      <div className="edit">
        <span className="btn bd-grn bg-t mg-r">
          <Link to={viewPageLink} className="grn">Edit</Link>
        </span>
        <button className="btn bd-red bg-t red" data-id={id} data-type={type} onClick={deletePost}>Delete</button>
      </div>
    </li>
  );
};

const mapDispatchToProps = () => dispatch => ({
  deleteRecord: url => dispatch(deleteSingleRecord(url))
});

const mapStateToProps = state => ({ state });

Incident.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  getRecord: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Incident);
