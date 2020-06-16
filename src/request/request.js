import axios from "axios";
import config from "@/config/config";
import store from "@/store/index";
import router from "@/router/index";
import { message } from "ant-design-vue";

const instance = axios.create({
  baseURL: config.apiUrl,
  headers: { "Content-Type": "application/json" }
});

const key = "request";
instance.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers["Authorization"] = `Bearer ${store.getters.token}`;
    }
    message.loading({ content: "Please wait", key });
    return config;
  },
  err => {
    message.error({ content: "Error", key });
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  res => {
    message.success({ content: "Success", key });
    return res;
  },
  err => {
    if (err.response.status === 401) {
      store.commit("logout");
      router.push("/auth/login");
    }
    try {
      const messages = err.response.data.message[0].messages;
      const errorMessage = messages[0].message;
      if (errorMessage) {
        message.error({ content: errorMessage, key });
      } else {
        message.error({ content: "Someting went wrong", key });
      }
    } catch {
      message.error({ content: "Someting went wrong", key });
    }
    return Promise.reject(err);
  }
);

export default instance;
