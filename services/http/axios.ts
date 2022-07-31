import axios from "axios";

export const ax = axios.create({
  baseURL: 'http://localhost:3030/api',
  timeout: 1000,
  headers: {
    'Authorization' : 'Bearer d47de3ce4f91ba2e6724d7cb3fc40cb67370d65560e5c7ac87ff43acafa8a6c927c9b0a143652c921c675ed3eb2ba3de85b2e4f57a84f60fb12f42c024c8abbf80deb80cb333fb5c366a0f73e53363c55753e9d4ac0857eddf8019a67420e472266131ffb5d3033c978e32ab0f62a408a5e11ce46b9327dcfcd940aed5d700f6'
  }
});

