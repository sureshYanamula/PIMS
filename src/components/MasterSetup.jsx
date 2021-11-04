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

const useStyles = makeStyles((theme) => ({
  marginLeft: {
    marginLeft: 170,
    marginBottom: 20,
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
    padding: "0px 40px",
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
  const [isInputError, setIsInputEarror] = React.useState(false);

  const handleAddProgram = () => {
    console.log(programValue, descriptionValue, warehouseValue);
    if (
      (programValue.length < 1) |
      (descriptionValue.length < 1) |
      (warehouseValue.length < 1)
    ) {
      setIsInputEarror(true);
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

  const openingMOdal = () => {
    setOpen(true);
  };

  return (
    <Grid container direction="column">
      <Paper className={classes.marginLeft}>
        <Grid
          item
          className={`${classes.innerMargin} ${classes.itemOneMargin}`}
        >
          <Typography variant="h5">Inventory Management</Typography>
          <Typography variant="subtitle1">Program Entry</Typography>
        </Grid>
        <Grid item container sm={12} className={classes.itemOneMargin}>
          <Input
            inputLabel="Program Id"
            inputPlaceHolder="Enter your program ID"
            inputValue={handleProgramValue}
            toReset={isReset}
            inputEarror={isInputError}
            reSettingIsReset={() => setIsReset(false)}
          />
          <Input
            inputLabel="Description"
            inputPlaceHolder="Enter your Description"
            inputValue={handleDescriptionValue}
            toReset={isReset}
            inputEarror={isInputError}
            reSettingIsReset={() => setIsReset(false)}
          />
          <SelectComponent
            selectLabel="Warehouse"
            selectValue={handleWarehouseValue}
            inputEarror={isInputError}
            toReset={isReset}
            reSettingIsReset={() => setIsReset(false)}
          />
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
            tableObj={[
              programValue,
              descriptionValue,
              warehouseValue,
              "Delete",
            ]}
          />
        </Grid>
      </Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container direction="column">
              <Grid item container direction="row" justifyContent="flex-end">
                <IconButton
                  aria-label="delete"
                  disableRipple
                  onClick={handleOnClose}
                >
                  <CloseOutlinedIcon fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item>
                <p
                  id="transition-modal-title"
                  className={classes.centeringText}
                >
                  Program already exists
                </p>
              </Grid>
              <Grid item container direction="row" justifyContent="center">
                <ButtonComponent
                  id="transition-modal-title"
                  buttonType="contained"
                  buttonLabel="Okay"
                  minWidth={false}
                  handleOnClick={handleOnClose}
                />
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
};

export default MasterSetup;
