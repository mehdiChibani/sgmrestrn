const axios = require('axios').default;
import {asyncStorage} from '../utils/asyncStorage';

export async function requestApi(params) {
  const headers = {
    Accept: '*/*',

    //If there is an error in api gateway, remove this commented code
    //Cookie: null,
  };

  // if (params.useToken) {
  //   // console.log(asyncStorage.getValue('token'));
  //   const token = await asyncStorage.getValue('token');
  //   // var basicAuth = `Bearer ${token}`;
  //   var basicAuth = `Bearer ${token}`;
  //   console.log(token);
  //   headers.Authorization = basicAuth;
  // }

  const payload = {
    method: params.method,
    url: params.urlString,
    headers: headers,
  };

  if (params.data) {
    payload.data = params.data;
  }
  // console.log(payload);
  const result = await axios(payload);
  // console.log('result.data');
  // console.log(result.data);
  return result;
}
