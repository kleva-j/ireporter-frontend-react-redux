import { ASYNC_START, ASYNC_END, GET_ALL_INCIDENTS } from './actionTypes';
import agent from '../agent';

const { crud } = agent;

export default type => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_START, subtype: GET_ALL_INCIDENTS });
    const incidents = await crud.getIncidents(type);
    dispatch({ type: ASYNC_END, payload: type, subtype: GET_ALL_INCIDENTS });
    dispatch({ type: GET_ALL_INCIDENTS, payload: incidents });
  } catch (error) {
    dispatch({ type: ASYNC_END, subtype: GET_ALL_INCIDENTS });
    return error;
  }
};
