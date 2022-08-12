import axios from "axios";

export const ax = axios.create({
  baseURL: 'http://localhost:3030/api',
  timeout: 1000,
  headers: {
    'Authorization' : 'Bearer 1721a11fadacdc72e7284c5f03cde865b3972c960468abdcbd204add1b26bd7f432dd30779bb566caa17167e0e98c9ff19eb7943fac38e3789381263a501547773e208a19c196426ddecfb87d120ccb9d1a121643f0d50f445e775e3ec216142efcb3472fe606a6a8f1597f741a78da6a6b78887be4521db233f1de2e1fa2ade'
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
