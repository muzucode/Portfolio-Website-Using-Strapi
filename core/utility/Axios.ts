import axios from "axios";

export const ax = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URI}/api`,
  timeout: 1000,
  headers: {
    'Authorization' : `Bearer ${process.env.API_KEY}`
  }
});