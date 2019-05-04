import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import viewAllActions from '../../../store/actions/viewAllActions';

const mockStore = configureMockStore([thunk]);
let store;

describe('Signup action creator', () => {
  test('should dispatch a successful viewAll action', () => {
    store = mockStore();
    return store.dispatch(viewAllActions())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  test('should dispatch a failed viewAll action', () => {
    store = mockStore();
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    store.dispatch(viewAllActions()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
