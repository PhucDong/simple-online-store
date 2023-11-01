import { Link, Typography } from "@mui/material";

function MainFooter() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      p={1}
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      &copy; Copyright
      <Link color="inherit" href="https://www.coderschool.vn">
        CoderSchool
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default MainFooter;
