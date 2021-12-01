import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";
import { ReactComponent as ArchiveIcon } from "../../../assets/icons/archive.svg";
import { ReactComponent as NoteIcon } from "../../../assets/icons/note.svg";
import { routePaths } from "../../../App";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function TemporaryDrawer({ toggleDrawer, isOpen }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.root}
      anchor={"left"}
      open={isOpen}
      onClose={toggleDrawer}
    >
      <div role="presentation" onClick={toggleDrawer}>
        <List>
          <ListItem button>
            <Link to={routePaths.home}>
              <ListItemIcon>
                <NoteIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={routePaths.archive}>
              <ListItemIcon>
                <ArchiveIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Archived" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={routePaths.trash}>
              <ListItemIcon>
                <DeleteIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </Link>
          </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
  );
}
