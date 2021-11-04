import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  borderRadius: {
    borderRadius: 0,
    // minWidth: 178,
    height: 35,
  },
  buttonMinWIdth: {
    minWidth: 178,
  },
}));

const ButtonComponent = ({
  buttonType,
  buttonLabel,
  handleOnClick,
  minWidth,
}) => {
  const classes = useStyles();

  const onClick = () => {
    handleOnClick(buttonLabel);
  };
  return (
    <div className={classes.root}>
      <Button
        variant={buttonType}
        color="primary"
        className={`${classes.borderRadius} ${
          minWidth ? classes.buttonMinWIdth : null
        }`}
        onClick={onClick}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default ButtonComponent;
