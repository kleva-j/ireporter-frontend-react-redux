import agent from '../agent';
import {
  GET_PROFILE,
  GET_RECORD_COUNT,
  ASYNC_START,
  ASYNC_END,
} from './actionTypes';

const { Auth, crud } = agent;

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_START, subtype: GET_PROFILE });
    const result = await Auth.profile();
    dispatch({ type: ASYNC_END, subtype: GET_PROFILE });
    dispatch({ type: GET_PROFILE, payload: result });
    window.localStorage.setItem('profile', JSON.stringify(result.profile));
  } catch (error) {
    dispatch({ type: ASYNC_END, subtype: GET_PROFILE });
    return error;
  }
};

export const getRecordCount = type => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_START, subtype: GET_RECORD_COUNT });
    const record = await crud.getRecordCount(type);
    dispatch({ type: ASYNC_END, subtype: GET_RECORD_COUNT });
    dispatch({ type: GET_RECORD_COUNT, payload: record });
  } catch (error) {
    dispatch({ type: ASYNC_END, subtype: GET_RECORD_COUNT });
    return error;
  }
};
