/* eslint-disable func-names */
import '@babel/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

global.MutationObserver = class {
  disconnect() {}

  observe() {}

  takeRecords() { return []; }
};

global.document.getSelection = function () {};
window.URL.createObjectURL = function () {};
