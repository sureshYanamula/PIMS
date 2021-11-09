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
import ModalComponent from "./ModalComponent";
import DeleteModal from "./DeleteModal";

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
    "Delete",
    false
  ),
  createData(
    "Entered Program2",
    "Entered Description2",
    "Entered Wherehouse2",
    "Delete",
    false
  ),
  createData(
    "Entered Program3",
    "Entered Description18",
    "Entered Wherehouse3",
    "Delete",
    true
  ),
  createData(
    "Entered Program4",
    "Entered Description3",
    "Entered Wherehouse4",
    "Delete",
    false
  ),
  createData(
    "Entered Program5",
    "Entered Description4",
    "Entered Wherehouse5",
    "Delete",
    false
  ),
  createData(
    "Entered Program6",
    "Entered Description5",
    "Entered Wherehouse6",
    "Delete",
    true
  ),
  createData(
    "Entered Program7",
    "Entered Description6",
    "Entered Wherehouse7",
    "Delete",
    false
  ),
  createData(
    "Entered Program8",
    "Entered Description7",
    "Entered Wherehouse8",
    "Delete",
    false
  ),
  createData(
    "Entered Program9",
    "Entered Description8",
    "Entered Wherehouse9",
    "Delete",
    true
  ),
  createData(
    "Entered Program10",
    "Entered Description9",
    "Entered Wherehouse10",
    "Delete",
    false
  ),
  createData(
    "Entered Program11",
    "Entered Description10",
    "Entered Wherehouse11",
    "Delete",
    false
  ),
  createData(
    "Entered Program12",
    "Entered Description11",
    "Entered Wherehouse12",
    "Delete",
    true
  ),
  createData(
    "Entered Program13",
    "Entered Description12",
    "Entered Wherehouse13",
    "Delete",
    false
  ),
  createData(
    "Entered Program14",
    "Entered Description13",
    "Entered Wherehouse14",
    "Delete",
    false
  ),
  createData(
    "Entered Program15",
    "Entered Description14",
    "Entered Wherehouse15",
    "Delete",
    true
  ),
  createData(
    "Entered Program16",
    "Entered Description15",
    "Entered Wherehouse16",
    "Delete",
    false
  ),
  createData(
    "Entered Program17",
    "Entered Description16",
    "Entered Wherehouse17",
    "Delete",
    false
  ),
  createData(
    "Entered Program18",
    "Entered Description17",
    "Entered Wherehouse18",
    "Delete",
    true
  ),
];

export default function TableComponent({
  addingDataToTable,
  tableObj,
  openingMOdal,
  program,
  deleteColumn,
  tableHeader,
}) {
  const classes = useStyles();
  const [rows, setRows] = React.useState(initialRows);
  const [open, setOpen] = React.useState(false);
  const [modalNotAllowed, setModalNotAllowed] = React.useState(0);
  const [modalAllowed, setModalAllowed] = React.useState(0);
  const [singleRow, setSingleRow] = React.useState({});

  useEffect(() => {
    var rowValue = {
      name: tableObj[0],
      calories: tableObj[1],
      fat: tableObj[2],
      carbs: tableObj[3],
    };
    if (tableObj[0].length >= 1 && tableObj[1].length >= 1) {
      console.log("1");
      let duplicateObj = rows.find((item) => {
        return item.name == tableObj[0];
      });
      if (duplicateObj?.fat == tableObj[2]) {
        // setOpen(true);
        openingMOdal("Failure");
        console.log("2");
      } else {
        console.log("3");
        openingMOdal("Success");
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

  const handleDelete = (data, index) => {
    setSingleRow(data);

    if (data.protein === true) {
      setModalAllowed(modalAllowed + 1);
    } else {
      setModalNotAllowed(modalNotAllowed + 1);
    }
  };
  const handleDeleteRow = () => {
    if (singleRow.protein === true) {
      let newRows = rows.filter((item, index) => {
        return item.name !== singleRow.name;
      });
      setRows(newRows);
    }
  };

  return (
    <TableContainer style={{ height: "40vh" }}>
      <Table
        className={classes.table}
        size="small"
        aria-label="a dense table"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              className={`${classes.rowColor} ${classes.rowBgColor}`}
            >
              {tableHeader[0]}
            </TableCell>
            <TableCell
              align="left"
              className={`${classes.rowColor} ${classes.rowBgColor}`}
            >
              {tableHeader[1]}
            </TableCell>
            {program ? (
              <TableCell
                align="left"
                className={`${classes.rowColor} ${classes.rowBgColor}`}
              >
                {tableHeader[2]}
              </TableCell>
            ) : null}
            {deleteColumn ? (
              <TableCell
                align="left"
                className={`${classes.rowColor} ${classes.rowBgColor}`}
              >
                Action
              </TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
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
              {program ? (
                <TableCell align="left" className={classes.rowColor}>
                  {row.fat}
                </TableCell>
              ) : null}

              {deleteColumn ? (
                <TableCell align="left" className={classes.rowColor}>
                  <Button
                    color="primary"
                    onClick={() => handleDelete(row, index)}
                    className={classes.button}
                  >
                    {row.carbs}
                  </Button>
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalComponent
        modalDialog={modalNotAllowed}
        modalText="You are not allowed to delete"
      />
      <ModalComponent
        modalDialog={modalAllowed}
        modalText="Are you sure want to Delete this"
        deleteButton={true}
        handleDeleteTableData={handleDeleteRow}
      />
    </TableContainer>
  );
}
