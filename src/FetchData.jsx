import { Button } from "@mui/base";
import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(5);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setLoading(false);

        setPosts(res?.data);

        console.log(res);
      } catch (error) {
        setLoading(false);

        console.log(error.message);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        increase count
      </Button>

      <Typography>{count}</Typography>
      {posts.map((item) => {
        return <Box key={item.id}>{item.title}</Box>;
      })}
    </div>
  );
};

export default FetchData;
