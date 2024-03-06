import axios from 'axios';

const handler = axios.create({
  baseURL: import.meta.env.VITE_HOST_URL,
  withCredentials: true,
  timeout: 3000,
});

handler.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

handler.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
    if (error.request) {
      throw new Error('אנחנו חווים כמה בעיות, בבקשה תנסו בעוד מספר דקות');
    }
    throw new Error('אופס, נראה שהייתה בעיה במה שניסית לעשות');
  }
);

export default handler;
