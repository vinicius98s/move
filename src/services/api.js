import axios from 'axios';

export default axios.create({
  baseURL: 'http://move-api.herokuapp.com',
});
