
import { useQuery } from 'react-query';
import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';


import axios from 'axios';

import { TShop } from '../types';

export const getProducts = (): Promise<TShop[]> => {
  return axios.get(`http://localhost:5000/shop`);
};

type QueryFnType = typeof getProducts;

type useShopOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useShop = ({ config }: useShopOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['users'],
    queryFn: () => getProducts(),
  });
};