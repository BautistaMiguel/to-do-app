import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    toggle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      "& h1": {
        color: theme.palette.type === "dark" ? "white" : "black",
      },
    },
    switch: {
      alignSelf: "flex-end",
    },
    body: {
      backgroundColor: theme.palette.background.paper,
      minHeight: "100vh",
    },
  };
});

export default useStyles;
