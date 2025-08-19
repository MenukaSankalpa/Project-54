//this rout for XAMP uses
/*import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
});

export default api;*/


//this rout for MySql uses
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api",
  withCredentials: true,
});

export default api;

