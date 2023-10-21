import axios from "axios";

const AxiosToFetch = axios.create({
//   baseURL: "http://localhost:5252",
   baseURL: "http://127.0.0.1:5001/gamer-freak/us-central1/api"
});

export default AxiosToFetch;
