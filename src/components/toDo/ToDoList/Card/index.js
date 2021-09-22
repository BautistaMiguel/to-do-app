import React from "react";
import useStyles from "./styles";
import MaterialCard from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/delete.svg";

const Card = ({ note }) => {
  const classes = useStyles();
  return (
    <MaterialCard className={classes.card} sx={{ minWidth: 275 }}>
      <CardContent>
        <p className={classes.text}>{note}</p>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          maxicho
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">malicho</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <DeleteIcon className={classes.deleteIcon} />
        </Button>
      </CardActions>
    </MaterialCard>
  );
};

export default Card;
