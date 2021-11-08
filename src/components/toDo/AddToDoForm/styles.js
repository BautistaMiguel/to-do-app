import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputContainer: {
    display: "flex",
    backgroundColor: "text.primary",
    color: "background.paper",
    flexDirection: "column",
    width: "20%",
    margin: "auto",
    border: "1px solid black",
    borderRadius: "8px",
    padding: "10px",
  },
  input: {
    width: "100%",
  },
  button: {
    alignSelf: "end",
    marginTop: "5px",
    padding: 0,
  },
  formTittle: {
    color: "black",
    textAlign: "center",
  },
});

export default useStyles;
