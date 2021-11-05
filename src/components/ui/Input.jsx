import React, { useEffect } from "react";
import { alpha, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 0,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: 286,
    height: 15,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

const Input = ({
  inputLabel,
  inputPlaceHolder,
  inputValue,
  toReset,
  reSettingIsReset,
  inputEarror,
  inputLength,
  earrorResetOnChannge,
  isEarrorResetOnChange,
}) => {
  const classes = useStyles();

  const [value, setValue] = React.useState("");
  const [earror, setEarror] = React.useState("");

  useEffect(() => {
    console.log(
      toReset,
      isEarrorResetOnChange,
      "toReset,isEarrorResetOnChange"
    );
    if (toReset) {
      setValue("");
      reSettingIsReset(!toReset);
      setEarror("");
    }
  }, [toReset, reSettingIsReset, isEarrorResetOnChange]);

  useEffect(() => {
    if (inputEarror > 0) {
      if (value.length < 1) {
        console.log("input");
        setEarror(`Please enter the ${inputLabel}`);
      }
      // value.length < 1 ? setEarror(`Please enter the ${inputLabel}`) : null;
    }
  }, [inputEarror]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setEarror("");
    inputValue(e.target.value);
    earrorResetOnChannge();
  };

  return (
    <form className={classes.root} noValidate>
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="bootstrap-input">
          {inputLabel}
        </InputLabel>
        <BootstrapInput
          placeholder={inputPlaceHolder}
          id="bootstrap-input"
          value={value}
          onChange={handleChange}
          inputProps={{ maxLength: inputLength }}
        />
        {console.log(inputLength)}
        {earror && <p style={{ color: "red" }}>{earror}</p>}
      </FormControl>
    </form>
  );
};

export default Input;
