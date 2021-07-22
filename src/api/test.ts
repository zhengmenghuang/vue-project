import axios from 'axios';

export default class TestService {
  static test() {
    return axios.get('/');
  }
}
