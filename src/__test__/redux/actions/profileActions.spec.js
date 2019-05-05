import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import { getProfile, getRecordCount } from '../../../store/actions/profileActions';

const mockStore = configureMockStore([thunk]);
let store;

describe('Profile action creator', () => {
  test('should dispatch a successful profile action', () => {
    store = mockStore();
    return store.dispatch(getProfile())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  test('should dispatch a failed profile action', () => {
    store = mockStore();
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    store.dispatch(getProfile()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  test('should dispatch a successful profile action when getting user records', () => {
    store = mockStore();
    return store.dispatch(getRecordCount())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  test('should dispatch a failed profile action when getting user records', () => {
    store = mockStore();
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    store.dispatch(getRecordCount()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
