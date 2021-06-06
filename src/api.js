import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyC21YjNcVCN2EpEsHfkyEfQ2my7KeE6AQU",
  },
});

export default request;
