import axios from "axios";

export const ax = axios.create({
  baseURL: 'http://localhost:3030/api',
  timeout: 1000,
  headers: {
    'Authorization' : 'Bearer 60c7200cd050eefcddb51e19cd5f288970b94a96c9b62a329a39bb5ceddd3bfd7950751c8b30205b3c3f623eac99e351989c757ad5791ac524552034791f2f94532b5b39cb2171bf16616f7f381e5afe8a2fe7f5762c4235868d80ad971ba6cedea2d1ad19e4a573f76f28316561bc21e21e948248891e812c0e8464f2cad761'
  }
});