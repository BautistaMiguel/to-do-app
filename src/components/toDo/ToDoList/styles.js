import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    masonry: {
      pading: "10px",
      display: "flex",
      width: "auto",
    },
    subtittle: {
      color: theme.palette.type === "dark" ? "white" : "black",
    },
  };
});

export default useStyles;
