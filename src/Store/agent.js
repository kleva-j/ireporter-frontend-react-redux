import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'https://i--reporter--api.herokuapp.com/api/v1';
const responseBody = res => res.body;
let token = null;
const tokenPlugin = (req) => {
  if (token) {
    req.set('authorization', token);
  }
};

const requests = {
  post: (url, body) => superagent
    .post(`${API_ROOT}${url}`, body)
    .set('Access-Control-Allow-Origin', '*')
    .use(tokenPlugin)
    .then(responseBody),
};

const Auth = {
  login: (username, password) => requests.post('/users/auth/login', { username, password }),
};

export default {
  Auth,
  setToken: (_token) => { token = _token; },
};
