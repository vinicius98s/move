import axios from 'axios';

export default axios.create({
  baseURL: __DEV__ ? 'http://localhost:3000' : 'http://move-api.herokuapp.com',
});
