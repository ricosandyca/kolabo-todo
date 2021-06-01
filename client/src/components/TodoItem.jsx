import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutlineOutlined";
import DragIcon from "@material-ui/icons/DragIndicatorOutlined";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  todoPaper: {
    background: theme.palette.background.default,
    padding: "5px",
    marginBottom: theme.spacing(0.7),
  },
  doneTodo: {
    background: theme.palette.background.paper,
  },
  dragging: {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

export default function TodoItem({ index, task, onToggleTask, onDeleteTask }) {
  const classes = useStyles();
  const { body, done = false, id } = task;

  return (
    <Draggable index={index} draggableId={id}>
      {(provided, { isDragging }) => (
        <Paper
          variant="outlined"
          className={`${classes.todoPaper} ${done ? classes.doneTodo : ""} ${
            isDragging ? classes.dragging : ""
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Drag handle */}
            <Box
              style={{
                zIndex: 2,
                left: "-1px",
                position: "relative",
                width: "6px",
                opacity: 0.6,
              }}
              display="flex"
              alignItems="center"
              {...provided.dragHandleProps}
            >
              <DragIcon style={{ fontSize: "16px" }} />
            </Box>

            {/* Checkbox */}
            <Box>
              <Tooltip title="Check">
                <Checkbox
                  color="primary"
                  checked={done}
                  onClick={() => onToggleTask(id)}
                />
              </Tooltip>
            </Box>

            {/* Todo body */}
            <Box flex="1" padding="5px">
              <Typography
                variant="body1"
                style={{ textDecoration: done ? "line-through" : "none" }}
              >
                {body}
              </Typography>
            </Box>

            {/* Delete button */}
            <Box>
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
