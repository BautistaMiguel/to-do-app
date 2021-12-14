import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    body: {
      backgroundColor: theme.palette.background.paper,
      minHeight: "100vh",
    },
    tittle: {
      textAlign: "center",
      marginTop: "0px",
    },
  };
});

export default useStyles;
