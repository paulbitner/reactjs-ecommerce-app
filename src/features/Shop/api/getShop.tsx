import React, { useEffect } from "react";

import { useQuery, UseQueryOptions } from "react-query";

import axios, { AxiosError } from "axios";

import { Product } from "../types";

function fetchGroups(): Promise<Product[]> {
  return axios
    .get(`http://localhost:5000/shop`)
    .then((response) => response.data);
}

export function useGroups<TData = Product>(
  options?: UseQueryOptions<Product, AxiosError, TData>
) {
  return useQuery("shop", fetchGroups);
}
