import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loader from '../../components/loaders';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/signedOutLinks';
import Signup from '../../components/auth/signup';
import Login from '../../components/auth/login';

const mockStore = configureStore();

const signupPage = () => {
  const props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: '/signup'
      }
    },
    signUp: jest.fn(),
  };

  const initialState = {
    authReducer: {
      currentUser: {},
      inProgress: true
    }
  };

  const mountWrapper = mount(
    <Provider store={mockStore(initialState)}>
      <MemoryRouter>
        <Signup {...props} />
      </MemoryRouter>
    </Provider>
  );
  return { mountWrapper };
};

const { mountWrapper } = signupPage();

describe('Signup component', () => {
  it('should render without failing', () => {
    expect(toJson(mountWrapper)).toMatchSnapshot();
  });
  it('should contain the Navbar, button and erroralert components', () => {
    expect(mountWrapper.find(Navbar)).toHaveLength(1);
    expect(mountWrapper.find(Nav)).toHaveLength(1);
    expect(mountWrapper.find(Loader)).toHaveLength(1);
  });
  it('should render form inputs, buttons and links', () => {
    expect(mountWrapper.find('.container')).toHaveLength(2);
    expect(mountWrapper.find('.form-control')).toHaveLength(7);
    expect(mountWrapper.find('.btn')).toHaveLength(1);
  });
});

const loginPage = () => {
  const props = {
    history: {
      push: jest.fn(),
      action: 'POP',
      block: jest.fn(),
      location: {
        pathname: '/login'
      }
    },
    logIn: jest.fn(),
  };

  const initialState = {
    authReducer: {
      currentUser: {},
      inProgress: true
    }
  };

  const Wrapper = mount(
    <Provider store={mockStore(initialState)}>
      <MemoryRouter>
        <Login {...props} />
      </MemoryRouter>
    </Provider>
  );
  return { Wrapper };
};

const { Wrapper } = loginPage();

describe('Login component', () => {
  it('should render without failing', () => {
    expect(toJson(Wrapper)).toMatchSnapshot();
  });
  it('should contain the Navbar, button and erroralert components', () => {
    expect(Wrapper.find(Navbar)).toHaveLength(1);
    expect(Wrapper.find(Nav)).toHaveLength(1);
    expect(mountWrapper.find(Loader)).toHaveLength(1);
  });
  it('should render form inputs, buttons and links', () => {
    expect(Wrapper.find('.container')).toHaveLength(2);
    expect(Wrapper.find('.form-control')).toHaveLength(2);
    expect(Wrapper.find('.btn')).toHaveLength(1);
  });
});
