import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    card: {
      padding: "10px",
      margin: "0px 10px 20px 10px",
    },
    actions: {
      justifyContent: "space-around",
      "& svg": {
        height: "1rem",
        fill: theme.palette.type === "dark" ? "white" : "black",
        width: "1rem",
      },
    },
    tittle: {
      fontSize: "1rem",
    },
    text: {
      wordWrap: "break-word",
    },
    deleteIcon: {
      height: "1rem",
      width: "1rem",
    },
    archiveIcon: {
      height: "1rem",
      width: "1rem",
    },
    paletteIcon: {},
    reminderIcon: {
      height: "1rem",
      width: "1rem",
    },
  };
});

export default useStyles;
