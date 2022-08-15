import axios from "axios";

export const ax = axios.create({
  baseURL: 'http://localhost:3030/api',
  timeout: 1000,
  headers: {
    'Authorization' : 'Bearer 1c261bb615522edc57aea4e398a5e6de83f913ec35fda4893115f79440dd5163a409b6d6497f3b2724df47ffd03e52300c744bf694f2e55a7e30c4d1d122e757111d070224c7aed3db0cf9aaac81e12d87cf23e37be8d5ee8291a4b3662045a833bcd96ae680f3a7e5bbe57b9ffb0c05f069220530a856a7e427ee056ef4e04e'
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
