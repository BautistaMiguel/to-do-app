import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    backgroundColor: "text.primary",
    color: "background.paper",
  },
  formTittle: {
    color: "black",
    textAlign: "center",
  },
});

export default useStyles;
