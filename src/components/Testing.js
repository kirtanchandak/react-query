import React from "react";
import { useQuery } from "react-query";

function Testing() {
  const { isLoading, error, data } = useQuery("gitdata", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>{data.name}</h1>
      <h3>{data.description}</h3>
    </div>
  );
}

export default Testing;
