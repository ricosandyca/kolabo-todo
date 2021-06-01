import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import SignOutIcon from "@material-ui/icons/ExitToAppOutlined";
import NightIcon from "@material-ui/icons/Brightness2";
import LightIcon from "@material-ui/icons/WbSunny";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { signout } from "../services/auth/signout";
import { getCurrentUser } from "../services/auth/current-user";
import { useToggleTheme } from "../hooks/useTheme";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: "24px",
    fontWeight: 600,
    letterSpacing: ".5px",
    marginBottom: theme.spacing(1),
  },
  chip: {
    paddingLeft: theme.spacing(0.5),
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  avatar: {
    backgroundColor: `${theme.palette.background.default} !important`,
    color: `${theme.palette.text.primary} !important`,
    height: theme.spacing(3.1),
    width: theme.spacing(3.1),
  },
}));

export default function TodoHeader() {
  const classes = useStyles();
  const histroy = useHistory();
  const user = getCurrentUser();
  const { theme, toggleTheme } = useToggleTheme();

  const handleSignOut = () => {
    signout();
    histroy.push("/signin");
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Box textAlign="center">
        <Typography className={classes.title}>Thingstodo</Typography>

        {/* Toggle theme button */}
        <Tooltip title="Toggle Theme">
          <IconButton color="primary" onClick={toggleTheme}>
            {theme === "light" ? (
              <NightIcon style={{ fontSize: "18px" }} />
            ) : (
              <LightIcon style={{ fontSize: "18px" }} />
            )}
          </IconButton>
        </Tooltip>

        {/* Account chip */}
        <Chip
          label={user.email}
          color="primary"
          className={classes.chip}
          onDelete={handleSignOut}
          deleteIcon={
            <Tooltip title="Sign Out">
              <Avatar className={classes.avatar}>
                <SignOutIcon style={{ fontSize: "18px" }} />
              </Avatar>
            </Tooltip>
          }
        />
      </Box>
    </Box>
  );
}
