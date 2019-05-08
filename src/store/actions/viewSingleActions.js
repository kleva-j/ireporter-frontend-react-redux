import { ASYNC_START, ASYNC_END, GET_SINGLE_INCIDENT, DELETE_INCIDENT } from './actionTypes';
import agent from '../agent';

const { crud } = agent;

export default (type, id) => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_START, subtype: GET_SINGLE_INCIDENT });
    const incident = await crud.getSingleIncident(type, id);
    dispatch({ type: ASYNC_END, payload: type, subtype: GET_SINGLE_INCIDENT });
    dispatch({ type: GET_SINGLE_INCIDENT, payload: incident });
  } catch (error) {
    dispatch({ type: ASYNC_END, subtype: GET_SINGLE_INCIDENT });
    return error;
  }
};

export const deleteSingleRecord = url => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_START, subtype: DELETE_INCIDENT });
    const result = await crud.deleteSingleIncident(url);
    dispatch({ type: ASYNC_END, subtype: DELETE_INCIDENT });
    dispatch({ type: DELETE_INCIDENT });
    return result;
  } catch (error) {
    dispatch({ type: ASYNC_END, subtype: DELETE_INCIDENT });
    return error;
  }
};
