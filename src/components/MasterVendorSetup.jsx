import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "./ui/Input";
import SelectComponent from "./ui/SelectComponent";
import ButtonComponent from "./ui/ButtonComponent";
import TableComponent from "./ui/TableComponent";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import IconButton from "@material-ui/core/IconButton";
import ModalComponent from "./ui/ModalComponent";

const useStyles = makeStyles((theme) => ({
  marginLeft: {
    marginLeft: "calc(16% + 4px)",
    marginBottom: 10,
    borderRadius: 0,
  },
  innerMargin: {
    marginLeft: 16,
  },
  itemOneMargin: {
    marginTop: 20,
  },
  itemTwoMargin: {
    marginTop: 30,
    marginBottom: 20,
  },
  tableMargin: {
    margin: 20,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: "300px",
    boxShadow: theme.shadows[5],
  },
  centeringText: {
    display: "flex",
    justifyContent: "center",
  },
}));

const MasterSetup = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [isReset, setIsReset] = React.useState(false);
  const [programValue, setProgramValue] = React.useState("");
  const [descriptionValue, setDescriptionValue] = React.useState("");
  const [warehouseValue, setWarehouseValue] = React.useState("");
  const [addingDataToTable, setAddingDataToTable] = React.useState(false);
  const [isInputError, setIsInputEarror] = React.useState(0);
  const [successModal, setSuccessModal] = React.useState(null);
  const [modalDialogSuccess, setModalDialogSuccess] = React.useState(0);
  const [modalDialogExists, setModalDialogExists] = React.useState(0);
  const [isEarrorResetOnChange, setIsEarrorResetOnChange] = React.useState(0);

  const handleAddProgram = () => {
    console.log(
      programValue.length,
      descriptionValue.length,
      warehouseValue.length,
      "programValue, descriptionValue, warehouseValue"
    );
    if ((programValue.length < 1) | (descriptionValue.length < 1)) {
      setIsInputEarror(isInputError + 1);
    }
    setAddingDataToTable(!addingDataToTable);

    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleWarehouseValue = (data) => {
    console.log(data);
    setWarehouseValue(data);
  };

  const handleProgramValue = (data) => {
    console.log(data, "handleProgramValue");
    setProgramValue(data);
  };

  const handleDescriptionValue = (data) => {
    console.log(data, "handleDescriptionValue");
    setDescriptionValue(data);
  };

  const handleResetButton = (data) => {
    console.log(data, "handleResetButton");
    setIsReset(true);
    setProgramValue("");
    setDescriptionValue("");
    setWarehouseValue("");
  };

  const handleOnClose = () => {
    setOpen(false);
  };

  const openingMOdal = (data) => {
    if (data == "Success") {
      console.log(data, "data");
      setSuccessModal(true);
      setModalDialogSuccess(modalDialogSuccess + 1);
    } else if (data == "Failure") {
      console.log(data, "data");
      setModalDialogExists(modalDialogExists + 1);
      setSuccessModal(true);
    }
  };

  const earrorResetOnChannge = () => {
    setIsEarrorResetOnChange(isEarrorResetOnChange + 1);
    // setIsReset(true);
  };

  return (
    <Grid container direction="column">
      <Paper className={classes.marginLeft}>
        <Grid
          item
          className={`${classes.innerMargin} ${classes.itemOneMargin}`}
        >
          <Typography variant="h5">Master Setup</Typography>
          <Typography variant="subtitle1">Vendor Entry</Typography>
        </Grid>
        <Grid item container sm={12} className={classes.itemOneMargin}>
          <Input
            inputLabel="Vendor Id"
            inputPlaceHolder="Enter your Vendor ID"
            inputValue={handleProgramValue}
            toReset={isReset}
            earrorResetOnChannge={earrorResetOnChannge}
            isEarrorResetOnChange={isEarrorResetOnChange}
            inputLength={6}
            inputEarror={isInputError}
            reSettingIsReset={() => setIsReset(false)}
          />
          <Input
            inputLabel="Vendor"
            inputPlaceHolder="Enter Vendor Name"
            inputValue={handleDescriptionValue}
            toReset={isReset}
            earrorResetOnChannge={earrorResetOnChannge}
            isEarrorResetOnChange={isEarrorResetOnChange}
            inputLength={50}
            inputEarror={isInputError}
            reSettingIsReset={() => setIsReset(false)}
          />
          {/* <SelectComponent
            selectLabel="Select your warehouse"
            selectValue={handleWarehouseValue}
            inputEarror={isInputError}
            toReset={isReset}
            reSettingIsReset={() => setIsReset(false)}
          /> */}
        </Grid>
        <Grid item className={classes.itemTwoMargin}>
          <Grid item container justifyContent="center">
            <ButtonComponent
              buttonType="outlined"
              buttonLabel="Reset"
              minWidth={true}
              handleOnClick={handleResetButton}
            />
            <ButtonComponent
              buttonType="contained"
              buttonLabel="Add Program"
              minWidth={true}
              handleOnClick={handleAddProgram}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.marginLeft}>
        <Grid item className={classes.tableMargin}>
          <TableComponent
            addingDataToTable={addingDataToTable}
            openingMOdal={openingMOdal}
            deleteColumn={true}
            program={false}
            tableObj={[
              programValue,
              descriptionValue,
              warehouseValue,
              "Delete",
            ]}
          />
        </Grid>
      </Paper>
      <ModalComponent
        modalDialog={modalDialogSuccess}
        modalText="Vendor added Successfully"
      />
      <ModalComponent
        modalDialog={modalDialogExists}
        modalText="Vendor Already Exists"
      />
    </Grid>
  );
};

export default MasterSetup;
