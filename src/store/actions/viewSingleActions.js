import { ASYNC_START, ASYNC_END, GET_SINGLE_INCIDENT } from './actionTypes';
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
