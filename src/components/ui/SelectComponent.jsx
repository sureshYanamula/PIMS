import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    position: "relative",
    borderRadius: 0,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "0px 26px 0px 12px",
    width: 248,
    height: 35,
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
      borderRadius: 0,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));
const SelectComponent = ({
  selectLabel,
  selectValue,
  toReset,
  reSettingIsReset,
  inputEarror,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [earror, setEarror] = React.useState("");

  useEffect(() => {
    if (toReset) {
      setValue("");
      reSettingIsReset(!toReset);
    }
  }, [toReset, reSettingIsReset]);

  useEffect(() => {
    if (inputEarror) {
      if (value.length < 1) {
        setEarror(`Please enter the Warehouse`);
      }
      // value.length < 1 ? setEarror(`Please enter the ${inputLabel}`) : null;
    }
  }, [inputEarror]);

  const handleChange = (event) => {
    setValue(event.target.value);
    selectValue(event.target.value);
    setEarror("");
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">
          {selectLabel}
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={value}
          onChange={handleChange}
          placeholder="select"
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />

          <option value="Warehouse1">Warehouse1</option>
          <option value="Warehouse2">Warehouse2</option>
          <option value="Warehouse3">Warehouse3</option>
          <option value="Warehouse4">Warehouse4</option>
          <option value="Warehouse5">Warehouse5</option>
        </NativeSelect>
        {earror && <p style={{ color: "red" }}>{earror}</p>}
      </FormControl>
    </div>
  );
};

export default SelectComponent;
