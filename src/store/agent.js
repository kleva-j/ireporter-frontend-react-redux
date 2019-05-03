import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'https://i--reporter--api.herokuapp.com/api/v1';
const responseBody = res => res.body;

const token = window.localStorage.getItem('jwt');

const tokenPlugin = (req) => {
  req.set('authorization', `BEARER ${token}`);
};

const requests = {
  post: (url, body) => superagent
    .post(`${API_ROOT}${url}`, body)
    .set('Access-Control-Allow-Origin', '*')
    .use(tokenPlugin)
    .then(responseBody),
};

const Auth = {
  login: userData => requests.post('/users/auth/login', userData),
  signup: userData => requests.post('/users/auth/signup', userData),
};

const crud = {
  createIncident: (data, type) => requests.post(`/${type}`, data),
};

export default {
  Auth,
  crud,
};
