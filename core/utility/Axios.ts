import axios from "axios";

export const ax = axios.create({
  baseURL: 'http://localhost:3030/api',
  timeout: 1000,
  headers: {
    'Authorization' : 'Bearer b015030d456cf8846f1167559e21d2e96250a0ea8f5ddd748dd60ac9639d8717ecc63c2d4d2e5d441d5faebe5a811964bd481da631a3ff616fc53a656430f1260aea592642c816d98a95cbc05d0f2ef298cd0074be0cf322743c1374fecdf251dff6d9570ef44f42d871f76937f148efb657660ef60a53d63e2792e38f56e201'
  }
});

export interface QueryConfig {
  contentType: string,
  qsp?: {
    field: string,
    searchValue: string
  }
}


export const getAll = async (options: QueryConfig) => {  
  if(options.qsp) {
    console.log('entered here')
    return await ax.get(`/${options.contentType}s?filters[${options.qsp.field}][$eq]=${options.qsp.searchValue}?populate=deep`); 
  } else {
    return await ax.get(`/${options.contentType}s?populate=deep`); 
  }
}
