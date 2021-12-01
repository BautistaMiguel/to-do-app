import React from "react";
import useStyles from "./styles";
import MaterialCard from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/delete.svg";
import { ReactComponent as ArchiveIcon } from "../../../../assets/icons/archive.svg";
import { ReactComponent as PaletteIcon } from "../../../../assets/icons/palette.svg";
import { ReactComponent as ReminderIcon } from "../../../../assets/icons/reminder.svg";
import { ReactComponent as NoteIcon } from "../../../../assets/icons/note.svg";

const Card = ({ note, deleteNote, moveToArchive, moveToNotes }) => {
  const classes = useStyles();

  return (
    <MaterialCard className={classes.card} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography className={classes.tittle} gutterBottom>
          Tittle
        </Typography>
        <p className={classes.text}>{note}</p>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small">
          <PaletteIcon className={classes.paletteIcon}></PaletteIcon>
        </Button>
        <Button size="small">
          <ReminderIcon className={classes.reminderIcon}></ReminderIcon>
        </Button>
        {moveToArchive && (
          <Button onClick={moveToArchive} size="small">
            <ArchiveIcon className={classes.archiveIcon}></ArchiveIcon>
          </Button>
        )}
        {moveToNotes && (
          <Button onClick={moveToNotes} size="small">
            <NoteIcon className={classes.archiveIcon}></NoteIcon>
          </Button>
        )}
        {deleteNote && (
          <Button onClick={deleteNote} size="small">
            <DeleteIcon className={classes.deleteIcon} />
          </Button>
        )}
      </CardActions>
    </MaterialCard>
  );
};

export default Card;
