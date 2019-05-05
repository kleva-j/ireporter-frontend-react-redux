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

  get: url => superagent
    .get(`${API_ROOT}${url}`)
    .set('Access-Control-Allow-Origin', '*')
    .use(tokenPlugin)
    .then(responseBody),
};

const Auth = {
  login: userData => requests.post('/user/login', userData),
  signup: userData => requests.post('/user/signup', userData),
  profile: () => requests.get('/user/userprofile')
};

const crud = {
  createIncident: (data, type) => requests.post(`/${type}`, data),
  getIncidents: type => requests.get(`/${type}`),
  getRecordCount: type => requests.get(`/records/${type}/count`),
};

export default {
  Auth,
  crud,
};
