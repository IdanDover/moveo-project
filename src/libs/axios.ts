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
      throw new Error(
        'We are experiencing some problems, please try again in a few minutes'
      );
    }
    throw new Error(
      'Oops, seems like there was a problem with what you tried to do'
    );
  }
);

export default handler;
