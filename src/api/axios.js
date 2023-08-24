import axios from "axios";

const instance = axios.create({
  baseURL: "Https://api.themoviedb.org/3",
  params: {
    api_key: "61695856466a6ef02d41ca97adf320d3",
    language: "ko-KR",
  },
});

export default instance;
