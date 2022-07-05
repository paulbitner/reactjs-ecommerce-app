import { useQuery } from "react-query";

import axios from "axios";

import { TSingleProduct } from "../types";

function fetchProduct({ slug }: useSingleProductProps): Promise<TSingleProduct>{
  return axios
    .get(`http://localhost:5000/shop/${slug}`)
    .then((response) => response.data);
}

type useSingleProductProps = {
  slug: string | undefined;
};

export function useSingleProduct({slug} : useSingleProductProps) {
  return useQuery("singleProduct", () => fetchProduct({slug}));
}



