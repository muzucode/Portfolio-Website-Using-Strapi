import axios from "axios";

export const ax = axios.create({
  baseURL: 'http://localhost:3030/api',
  timeout: 1000,
  headers: {
    'Authorization' : 'Bearer 44154dd56bb730511ca3f0255da8d10e68d29a389116c008b75a49fd5ad73ee9d7459c7275968725e731f8f12def02d7c334818e670de4b4cf89100bae08008e85ae875f1f372792cc4beac086348d6e27dedf16de2674ebad040bd9d2d2d87f7599704f0f0b05963b97846fc410e02cba574d6244a092002e78e24a6fdf211a'
  }
});