/* eslint-disable no-console */

import { register } from 'register-service-worker';
import axios from 'axios';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n'
        + 'For more details, visit https://goo.gl/AFskqB',
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}

// 在这里挂载 axios 的请求拦截
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.headers.Authorization = 'test';
  return config;
}, error => Promise.reject(error));

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  console.log(48, response);
  return response;
}, error => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  console.log(53, error.toString());
  return Promise.reject(error);
});
