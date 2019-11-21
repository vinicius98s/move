import axios from 'axios';
import getAuthToken from '../utils/getAuthToken';

const api = axios.create({
  baseURL: __DEV__ ? 'http://localhost:3000' : 'http://move-api.herokuapp.com',
});

export const handleApiRequest = async ({method, endpoint, body}) => {
  const authToken = await getAuthToken();
  const headers = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  if (body) {
    return await api[method](endpoint, body, headers);
  }

  return await api[method](endpoint, headers);
};

export default api;
