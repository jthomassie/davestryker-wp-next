// components/useRequest.js

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = "/";

export const useGetPosts = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;

  const { data: shows, error } = useSWR(url, fetcher);

  return { shows, error };
};
