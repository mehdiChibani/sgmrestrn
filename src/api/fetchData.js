import {constants} from '../constants/constants';
import {requestApi} from './networkingClient';

const getPopularRestaurents = async () => {
  const params = {
    urlString: constants.baseUrl + 'popular',
    method: 'get',
  };

  return await requestApi(params);
};

export const fetchData = {
  getPopularRestaurents,
};
