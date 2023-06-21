import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.7.168:7000/api/",
  // baseURL: "https://stageapi.eupheusapp.com/api/",
});

export default instance;
