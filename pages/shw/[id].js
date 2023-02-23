// pages/shw/[id].js

import { useRouter } from "next/router";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ShowPage = async () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSwr(
    query.lastdate ? `/shw/${query.lastdate}` : null,
    fetcher
  );

  // save the show
  let response = await fetch("/api/shows", {
    method: "POST",
    body: JSON.stringify(editshow),
  });

  if (error) return <div>Failed to load user</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return <div>{data.lastdate}</div>;
};

export default ShowPage;
