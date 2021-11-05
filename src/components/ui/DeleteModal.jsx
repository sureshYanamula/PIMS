import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Paper, Typography } from "@material-ui/core";
import ButtonComponent from "./ButtonComponent";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: 300,
  },
  centeringText: {
    display: "flex",
    justifyContent: "center",
  },
}));

const DeleteModal = ({ modalDialog, modalText }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalTextState, setModalTextState] = React.useState(modalText);

  useEffect(() => {
    console.log("setopen");
    setModalTextState(modalText);
    if (modalDialog > 0) {
      setOpen(true);
    }
  }, [modalDialog]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {};

  return (
    <div>
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
                  onClick={handleClose}
                >
                  <CloseOutlinedIcon fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item>
                <p
                  id="transition-modal-title"
                  className={classes.centeringText}
                >
                  {modalTextState}
                </p>
              </Grid>
              <Grid item container direction="row" justifyContent="center">
                <ButtonComponent
                  id="transition-modal-title"
                  buttonType="contained"
                  buttonLabel="cancel"
                  minWidth={false}
                  handleOnClick={handleClose}
                />
                <ButtonComponent
                  id="transition-modal-title"
                  buttonType="contained"
                  buttonLabel="Okay"
                  minWidth={false}
                  handleOnClick={handleDelete}
                />
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteModal;
