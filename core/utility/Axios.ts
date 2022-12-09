import axios from "axios";


export const ax = axios.create({
  baseURL: `http://${process.env.HOST_IP}:3030/api`,
  timeout: 1000,
  headers: {
    'Authorization' : `Bearer ${process.env.API_KEY}`
  }
});