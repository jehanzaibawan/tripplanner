import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ToggleGroup = props => {
  const [option, setOption] = useState(props.default);

  useEffect(() => {
    props.updateFilter(option);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);

  const handleChange = (event, selectedValue) => {
    setOption(selectedValue);
  };

  const classes = useStyles();

  const renderChildren = () => {
    if (Array.isArray(props.options) && props.options.length > 0)
      return props.options.map((opt, index) => {
        return (
          <ToggleButton key={index + 1} value={opt.value}>
            <Icon className={classes.leftIcon}>{opt.icon}</Icon>
            <strong>{opt.value}</strong>
          </ToggleButton>
        );
      });
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={option}
      exclusive
      onChange={handleChange}
    >
      {renderChildren()}
    </ToggleButtonGroup>
  );
};

ToggleGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  default: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired
};

export default ToggleGroup;
