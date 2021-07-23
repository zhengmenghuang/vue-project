import axios from 'axios';
import { message } from 'ant-design-vue';

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
  message.info('请求成功');
  console.log(16, response.data);
  return response.data;
}, error => {
  if (error.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    console.log(error.response);
  } else if (error.request) {
    // 请求已经成功发起，但没有收到响应
    // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
    // 而在node.js中是 http.ClientRequest 的实例
    console.log(error.request);
  } else {
    // 发送请求时出了点问题
    console.log('Error', error.message);
  }
  message.info(error.toString());
  return Promise.reject(error);
});
