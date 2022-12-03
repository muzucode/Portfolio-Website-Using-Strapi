import axios from "axios";


export const ax = axios.create({
  baseURL: `${process.env.API_BASE_URL}`,
  timeout: 1000,
  headers: {
    'Authorization' : `Bearer ${process.env.API_KEY}`
  }
});