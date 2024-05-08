import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const [name, setName] = useState("Roman");

  //   useEffect(showSthg) //runs on every render or re-render
  //   useEffect(showSthg, []); // runs only on component mount

  useEffect(() => {
    console.log("i am running");

    return () => {
      console.log("unmount has happened");
    };
  }, [name]);

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </Button>

      <Typography variant="h3">{count}</Typography>

      <Button
        variant="contained"
        color="error"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decrease
      </Button>

      <Button
        onClick={() => {
          setName("Ramesh");
        }}
      >
        change name
      </Button>

      <Typography>{name}</Typography>
    </div>
  );
};

export default Counter;
