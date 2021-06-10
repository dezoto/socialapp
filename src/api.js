import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyC1iWr2JI5RxqPvevXc-iDuDNQ_-kqhR7k",
  },
});

export default request;
