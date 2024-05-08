import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ResizeWindow = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
      console.log("running");
    });

    // clean up function
    //  it runs on component unmount
    // prevents from memory leak
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  return (
    <Box>
      <Typography variant="h3">{width}</Typography>
      <Typography variant="h3">{height}</Typography>
    </Box>
  );
};

export default ResizeWindow;
