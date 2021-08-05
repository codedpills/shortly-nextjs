import axios from 'axios'

const axiosClient = axios.create()

axiosClient.defaults.baseURL = `https://api.shrtco.de/v2/`;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export default axiosClient;