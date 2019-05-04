import { createStore } from 'redux';
import { CREATE_INCIDENT, ASYNC_START, ASYNC_END, SIGNUP, LOGIN } from '../../../store/actions/actionTypes';
import rootReducer from '../../../store/reducers/rootReducer';

describe('Root Reducer', () => {
  const store = createStore(rootReducer);

  test('root reducer', () => {
    expect(store.getState().authReducer).toMatchSnapshot();
    expect(store.getState().createReducer).toMatchSnapshot();

    const signupAction = { type: SIGNUP };
    const loginAction = { type: LOGIN };
    const createIncidentAction = { type: CREATE_INCIDENT };
    const asyncStartActions = { type: ASYNC_START };
    const asyncEndActions = { type: ASYNC_END };

    store.dispatch(signupAction);
    expect(store.getState().authReducer).toMatchSnapshot();

    store.dispatch(loginAction);
    expect(store.getState().authReducer).toMatchSnapshot();

    store.dispatch(createIncidentAction);
    expect(store.getState().createReducer).toMatchSnapshot();

    store.dispatch(asyncStartActions);
    expect(store.getState().createReducer).toMatchSnapshot();

    store.dispatch(asyncEndActions);
    expect(store.getState().createReducer).toMatchSnapshot();
  });
});
