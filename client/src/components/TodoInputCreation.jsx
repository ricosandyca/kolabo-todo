import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormGroup from "@material-ui/core/FormGroup";

import useInput from "../hooks/useInput";

export default function TodoInputCreation({ actions }) {
  const todoInput = useInput("");
  const { createTask, isCreateTaskLoading } = actions;

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(todoInput.inputProps.value);
    todoInput.setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <TextField
          label="What needs to be done?"
          variant="outlined"
          InputProps={{
            endAdornment: isCreateTaskLoading && (
              <InputAdornment position="end">
                <CircularProgress size="24px" />
              </InputAdornment>
            ),
          }}
          {...todoInput.inputProps}
        />
      </FormGroup>
    </form>
  );
}
