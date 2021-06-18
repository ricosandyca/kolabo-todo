import { useRecoilValue } from "recoil";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

import TodoHeader from "../components/TodoHeader";
import TodoInputCreation from "../components/TodoInputCreation";
import TodoList from "../components/TodoList";
import NyanAnimation from "../components/NyanAnimation";
import { useTasks } from "../hooks/useTask";
import { nyanState } from "../store/view";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
  },
  wrapper: {
    width: "100%",
    maxWidth: "610px",
    margin: `${theme.spacing(5)}px ${theme.spacing(3)}px`,
    "& > *": {
      marginBottom: theme.spacing(3.5),
    },
  },
  nyancat: {
    bottom: 0,
    left: 0,
    position: "fixed",
    zIndex: 9,
    height: "220px",
  },
}));

export default function TodoPage() {
  const classes = useStyles();
  const actions = useTasks();
  const nyan = useRecoilValue(nyanState);

  return (
    <Box className={classes.root} display="flex" justifyContent="center">
      <Box className={classes.wrapper} display="flex" flexDirection="column">
        {/* Header */}
        <TodoHeader />
        {/* Todo input creation */}
        <TodoInputCreation actions={actions} />
        {/* Todo list */}
        <TodoList actions={actions} />
      </Box>
      {/* nyancat animation */}
      {nyan && <NyanAnimation className={classes.nyancat} />}
    </Box>
  );
}
