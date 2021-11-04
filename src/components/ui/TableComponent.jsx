import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

import ButtonComponent from "./ButtonComponent";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 600,
  },
  rowColor: {
    border: "1.5px solid #F0F0F0",
  },
  rowBgColor: {
    backgroundColor: "#F0F0F0",
  },
  rowHover: {
    "&:hover": {
      backgroundColor: "#F0F0F0",
    },
  },

  button: {
    textTransform: "none",
    textDecoration: "underline",
    "&:hover": {
      backgroundColor: "none",
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
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const initialRows = [
  createData(
    "Entered Program1",
    "Entered Description1",
    "Entered Wherehouse1",
    "Delete"
  ),
  createData(
    "Entered Program2",
    "Entered Description2",
    "Entered Wherehouse2",
    "Delete"
  ),
  createData(
    "Entered Program3",
    "Entered Description18",
    "Entered Wherehouse3",
    "Delete"
  ),
  createData(
    "Entered Program4",
    "Entered Description3",
    "Entered Wherehouse4",
    "Delete"
  ),
  createData(
    "Entered Program5",
    "Entered Description4",
    "Entered Wherehouse5",
    "Delete"
  ),
  createData(
    "Entered Program6",
    "Entered Description5",
    "Entered Wherehouse6",
    "Delete"
  ),
  createData(
    "Entered Program7",
    "Entered Description6",
    "Entered Wherehouse7",
    "Delete"
  ),
  createData(
    "Entered Program8",
    "Entered Description7",
    "Entered Wherehouse8",
    "Delete"
  ),
  createData(
    "Entered Program9",
    "Entered Description8",
    "Entered Wherehouse9",
    "Delete"
  ),
  createData(
    "Entered Program10",
    "Entered Description9",
    "Entered Wherehouse10",
    "Delete"
  ),
  createData(
    "Entered Program11",
    "Entered Description10",
    "Entered Wherehouse11",
    "Delete"
  ),
  createData(
    "Entered Program12",
    "Entered Description11",
    "Entered Wherehouse12",
    "Delete"
  ),
  createData(
    "Entered Program13",
    "Entered Description12",
    "Entered Wherehouse13",
    "Delete"
  ),
  createData(
    "Entered Program14",
    "Entered Description13",
    "Entered Wherehouse14",
    "Delete"
  ),
  createData(
    "Entered Program15",
    "Entered Description14",
    "Entered Wherehouse15",
    "Delete"
  ),
  createData(
    "Entered Program16",
    "Entered Description15",
    "Entered Wherehouse16",
    "Delete"
  ),
  createData(
    "Entered Program17",
    "Entered Description16",
    "Entered Wherehouse17",
    "Delete"
  ),
  createData(
    "Entered Program18",
    "Entered Description17",
    "Entered Wherehouse18",
    "Delete"
  ),
];

export default function TableComponent({
  addingDataToTable,
  tableObj,
  openingMOdal,
}) {
  const classes = useStyles();
  const [rows, setRows] = React.useState(initialRows);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    var rowValue = {
      name: tableObj[0],
      calories: tableObj[1],
      fat: tableObj[2],
      carbs: tableObj[3],
    };
    if (
      tableObj[0].length >= 1 &&
      tableObj[1].length >= 1 &&
      tableObj[2].length >= 1
    ) {
      console.log("1");
      let duplicateObj = rows.find((item) => {
        return item.name == tableObj[0];
      });
      if (duplicateObj?.fat == tableObj[2]) {
        // setOpen(true);
        openingMOdal();
        console.log("2");
      } else {
        console.log("3");

        setRows([rowValue, ...rows]);
      }
    }
  }, [addingDataToTable]);

  const handleOnClose = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              className={`${classes.rowColor} ${classes.rowBgColor}`}
            >
              Program Id
            </TableCell>
            <TableCell
              align="left"
              className={`${classes.rowColor} ${classes.rowBgColor}`}
            >
              Description
            </TableCell>
            <TableCell
              align="left"
              className={`${classes.rowColor} ${classes.rowBgColor}`}
            >
              Wherehouse
            </TableCell>
            <TableCell
              align="left"
              className={`${classes.rowColor} ${classes.rowBgColor}`}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} calssName={classes.tableRow}>
              <TableCell
                component="th"
                scope="row"
                className={classes.rowColor}
              >
                {row.name}
              </TableCell>
              <TableCell align="left" className={classes.rowColor}>
                {row.calories}
              </TableCell>
              <TableCell align="left" className={classes.rowColor}>
                {row.fat}
              </TableCell>
              <TableCell align="left" className={classes.rowColor}>
                <Button color="primary" className={classes.button}>
                  {row.carbs}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
    </TableContainer>
  );
}
