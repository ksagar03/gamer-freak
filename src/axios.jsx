import axios from "axios";

const AxiosToFetch = axios.create({
  //   baseURL: "http://localhost:5252",
  //  baseURL: "http://127.0.0.1:5001/gamer-freak/us-central1/api" // this is url is used for emulating the backend (for testing for our backend)
  baseURL: "https://us-central1-gamer-freak.cloudfunctions.net/api", // URL for hosting the website
});

export default AxiosToFetch;
