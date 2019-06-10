import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {
  durationToMinutes,
  getTimeFromMins,
  getPriceAfterDiscount
} from "../../utils/utils";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  euro: {
    fontSize: "1rem"
  }
}));

const formatTranportIcons = means => {
  if (means === "car") return <Icon>directions_car</Icon>;
  if (means === "bus") return <Icon>directions_bus</Icon>;
  if (means === "train") return <Icon>train</Icon>;
  else return <Icon>card_travel</Icon>;
};

const getTotalTravellingTimeAndCost = items => {
  return items.reduce(
    (pres, ittr) => {
      return {
        time: (pres.time += durationToMinutes(
          ittr.duration.h,
          ittr.duration.m
        )),
        cost: (pres.cost += getPriceAfterDiscount(ittr.cost, ittr.discount))
      };
    },
    { time: 0, cost: 0 }
  );
};

const formatListHeader = (items, classes) => {
  if (Array.isArray(items) && items.length > 0) {
    const { time, cost } = getTotalTravellingTimeAndCost(items);
    const { hours, minutes } = getTimeFromMins(time);
    return (
      <ListItem button selected={true}>
        <ListItemText
          primary={`${items[0].departure} > ${items[items.length - 1].arrival}`}
          secondary={`Trip duration is ${hours}h ${minutes}m`}
        />
        <ListItemSecondaryAction>
          <Typography
            variant="h6"
            component="h5"
            className={classes.inline}
            color="textPrimary"
          >
            {`Trip cost: ${cost}`}
            <Icon className={classes.euro}>euro_symbol</Icon>
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
};

const formatListItems = (items, classes) => {
  if (Array.isArray(items) && items.length > 0)
    return items.map((item, index) => (
      <React.Fragment key={`list-item-${index + 1}`}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              {formatTranportIcons(item.transport)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${item.departure} > ${item.arrival}`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {item.transport}
                </Typography>
                {` ${item.reference} for ${item.duration.h}h ${item.duration.m}m`}
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction>
            <Typography
              variant="h6"
              component="h5"
              className={classes.inline}
              color="textPrimary"
            >
              {item.cost}
              <Icon className={classes.euro}>euro_symbol</Icon>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    ));
};

const DataList = props => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {formatListHeader(props.data, classes)}
      {formatListItems(props.data, classes)}
    </List>
  );
};

DataList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default DataList;
