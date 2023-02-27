import React from "react";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { incNumber } from "../redux/actions";
import { decNumber } from "../redux/actions";

function Testing() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
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
      <button onClick={() => dispatch(decNumber())}>-</button>
      <span>{myState}</span>
      <button onClick={() => dispatch(incNumber())}>+</button>
    </div>
  );
}

export default Testing;
