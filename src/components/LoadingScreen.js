import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 0 : prevProgress + 20
  //     );
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
      {/* <CircularProgress variant="determinate" value={progress} /> */}
    </Box>
  );
}

export default LoadingScreen;
