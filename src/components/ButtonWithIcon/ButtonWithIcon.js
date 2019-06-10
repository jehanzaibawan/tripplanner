import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ButtonWithIcon = props => {
  const classes = useStyles();

  return (
    <Button
      disabled={props.disabled}
      variant="contained"
      color={props.color}
      className={classes.button}
      onClick={props.onClick}
    >
      <Icon className={classes.leftIcon}>{props.icon}</Icon>
      {props.label}
    </Button>
  );
};

ButtonWithIcon.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

ButtonWithIcon.defaultProps = {
  disabled: false,
  color: "default",
  onClick: () => {}
};

export default ButtonWithIcon;
