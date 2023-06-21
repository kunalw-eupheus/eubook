import axios from "axios";

const localinstance = axios.create({
  // baseURL: "http://192.168.7.148:7000/api/",
  baseURL: "http://192.168.7.168:7000/api/",

  // baseURL: "https://stageapi.eupheusapp.com/api/",
});

export default localinstance;
