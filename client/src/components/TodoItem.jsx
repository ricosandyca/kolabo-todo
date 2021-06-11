import { useRef, useState, useEffect } from "react";
import cn from "classnames";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutlineOutlined";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { red } from "@material-ui/core/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  todoPaper: {
    position: "relative",
    background: theme.palette.background.default,
    padding: "5px",
    marginBottom: theme.spacing(0.7),
    transition: "background .2s, border .2s",
    overflow: "hidden",
    "&:hover": {
      background: theme.palette.background.paper,
    },
  },
  dragging: {
    background: theme.palette.background.paper,
  },
  editing: {
    borderColor: theme.palette.secondary.main,
    background: `${theme.palette.background.default} !important`,
    "&::before": {
      background: theme.palette.secondary.main,
      content: "''",
      zIndex: 0,
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0.075,
    },
  },
  done: {
    opacity: 0.4,
  },
}));

export default function TodoItem({
  index,
  task,
  onToggleTask,
  onDeleteTask,
  onUpdateTask,
}) {
  const { body, done = false, id } = task;
  const classes = useStyles();

  const inputRef = useRef(null);
  const [value, setValue] = useState(body);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isEditing) if (inputRef.current) inputRef.current.children[0].select();
  }, [isEditing]);

  const onEdit = () => {
    setIsEditing(true);
  };
  const onSubmit = async () => {
    setIsEditing(false);
    // no changes
    if (value === body) return;
    if (!value || value.trim() === "") return onDeleteTask(id);
    // delete
    onUpdateTask(id, value);
  };

  return (
    <Draggable index={index} draggableId={id}>
      {(provided, { isDragging }) => (
        <Paper
          variant="outlined"
          className={cn(
            classes.todoPaper,
            { [classes.dragging]: isDragging },
            { [classes.editing]: isEditing }
          )}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            className={cn({ [classes.done]: done })}
          >
            {/* Checkbox */}
            <Box zIndex={3}>
              <Tooltip title="Check">
                <Checkbox
                  color="primary"
                  checked={done}
                  onClick={() => onToggleTask(id)}
                />
              </Tooltip>
            </Box>

            {/* Todo body */}
            <Box
              zIndex={3}
              flex="1"
              padding="5px"
              onClick={onEdit}
              style={{ cursor: "text" }}
            >
              <Box>
                <Box hidden={!isEditing}>
                  <InputBase
                    ref={inputRef}
                    style={{ width: "100%" }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={onSubmit}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") onSubmit();
                      if (e.key === "Backspace" && !value) onDeleteTask(id);
                    }}
                  />
                </Box>
                <Box
                  hidden={isEditing}
                  style={{
                    textDecoration: done ? "line-through" : "none",
                  }}
                >
                  <Typography variant="body1">{value}</Typography>
                </Box>
              </Box>
            </Box>

            {/* Delete button */}
            <Box zIndex={3} style={{ color: red[700] }}>
              <Tooltip title="Delete">
                <IconButton color="secondary" onClick={() => onDeleteTask(id)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Paper>
      )}
    </Draggable>
  );
}
