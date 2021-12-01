import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: "15vw",
      backgroundColor: theme.palette.background.paper,
      marginTop: "64px",

      "& > div": {
        marginTop: "64px",
      },
    },
    list: {
      marginTop: "64px",
    },
    fullList: {
      width: "auto",
    },
    icon: {
      height: "1rem",
      width: "1rem",
    },
  })
);

export default useStyles;
