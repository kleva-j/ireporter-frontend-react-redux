import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import viewSingleActions, { deleteSingleRecord } from '../../../store/actions/viewSingleActions';

const mockStore = configureMockStore([thunk]);
let store;

describe('ViewSingle action creator', () => {
  test('should dispatch a successful viewSingle action', () => {
    store = mockStore();
    return store.dispatch(viewSingleActions())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  test('should dispatch a failed viewSingle action', () => {
    store = mockStore();
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    store.dispatch(viewSingleActions()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  test('should dispatch a successful deleteSingle action', () => {
    store = mockStore();
    return store.dispatch(deleteSingleRecord())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  test('should dispatch a failed viewSingle action', () => {
    store = mockStore();
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    store.dispatch(deleteSingleRecord()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
