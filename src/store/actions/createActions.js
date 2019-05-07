import { ASYNC_START, ASYNC_END, CREATE_INCIDENT } from './actionTypes';
import agent from '../agent';

const { crud } = agent;

export default (data, type) => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_START, subtype: CREATE_INCIDENT });
    const incident = await crud.createIncident(data, type);
    dispatch({ type: ASYNC_END, payload: data, subtype: CREATE_INCIDENT });
    dispatch({ type: CREATE_INCIDENT, payload: incident });
    return incident;
  } catch (error) {
    dispatch({ type: ASYNC_END, payload: data, subtype: CREATE_INCIDENT });
    return error.message;
  }
};
