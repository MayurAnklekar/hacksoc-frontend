import axios from "axios";
import SERVER_URI from "../serverUri";

const axiosConfig = axios.create({
  baseURL: `${SERVER_URI}/api`,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosConfig;
