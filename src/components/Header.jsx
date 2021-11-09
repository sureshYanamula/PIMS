import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ProfileMenu from "./ProfileMenu";
import MasterSetup from "./MasterSetup";
import MasterVendorSetup from "./MasterVendorSetup";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import Reason from "./Reason";
import Warehouse from "./Warehouse";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#22599c",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "red",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
    borderTop: "1px solid grey",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  paper: {
    background: "#22599c",
    width: "16%",
  },
  accordionExpanded: {
    margin: "0 !important",
    backgroundColor: "#22599c",
    border: "none",
    overflowX: "hidden",
    overflowY: "hidden",
    boxShadow: "none !important",
    // boxShadow:
    //   "0px 2px 1px -1px rgb(0 0 0 / 10%), 0px 1px 1px 0px rgb(0 0 0 / 7%), 0px 1px 3px 0px rgb(0 0 0 / 6%)",
  },
  heading: {
    color: "white",
    fontWeight: 300,
  },
  iconColor: {
    color: "white",
  },
  listItemPadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemText: {
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();
  let history = useHistory();

  const handleInventory = (data) => {
    console.log(data);
    switch (data) {
      case "Program":
        window.open("http://localhost:3000/program", "_self");
        break;
      case "Vendor":
        window.open("http://localhost:3000/vendor", "_self");
        break;
      case "Warehouse":
        window.open("http://localhost:3000/warehouse", "_self");
        break;
      case "Reason Codes":
        window.open("http://localhost:3000/reasonCodes", "_self");
        break;
    }
    // if (data === "Program") {
    //   window.open("http://localhost:3000/program", "_self");

    // }
    // if (data === "Vendor") {
    //   window.open("http://localhost:3000/vendor", "_self");
    // }
  };

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />
        <AppBar position="fixed" elevation={0} className={classes.appBar}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" noWrap>
              PIMS
            </Typography>
            <Typography variant="h5" noWrap>
              <ProfileMenu />
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer classes={{ paper: classes.paper }} variant="permanent">
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <Accordion
                elevation={0}
                square={true}
                className={classes.accordionExpanded}
                // classes={{
                //   expanded: classes.accordionExpanded,
                //   root: classes.accordionExpanded,
                // }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon classes={{ root: classes.iconColor }} />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Master Setup
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {[
                      "Item",
                      "Location",
                      "Pack",
                      "Program",
                      "Reason Codes",
                      "Tire",
                      "Unit",
                      "Vendor",
                      "Warehouse",
                    ].map((text, index) => (
                      <ListItem
                        button
                        key={text}
                        onClick={() => handleInventory(text)}
                        classes={{ root: classes.listItemPadding }}
                      >
                        <ListItemText
                          primary={text}
                          className={classes.listItemText}
                        />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion
                elevation={0}
                square={true}
                className={classes.accordionExpanded}

                // classes={{
                //   expanded: classes.accordionExpanded,
                //   root: classes.accordionExpanded,
                // }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon classes={{ root: classes.iconColor }} />
                  }
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Inventory Management
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {[
                      "Tree Item",
                      "Tree Item",
                      "Tree Item",
                      "Tree Item",
                      "Tree Item",
                    ].map((text, index) => (
                      <ListItem
                        button
                        key={text}
                        classes={{ root: classes.listItemPadding }}
                      >
                        <ListItemText
                          primary={text}
                          className={classes.listItemText}
                        />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion
                elevation={0}
                square={true}
                className={classes.accordionExpanded}

                // classes={{
                //   expanded: classes.accordionExpanded,
                //   root: classes.accordionExpanded,
                // }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon classes={{ root: classes.iconColor }} />
                  }
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>Orders</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {[
                      "Tree Item",
                      "Tree Item",
                      "Tree Item",
                      "Tree Item",
                      "Tree Item",
                    ].map((text, index) => (
                      <ListItem
                        button
                        key={text}
                        classes={{ root: classes.listItemPadding }}
                      >
                        <ListItemText
                          primary={text}
                          className={classes.listItemText}
                        />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path="/program">
              <MasterSetup />
            </Route>
            <Route exact path="/vendor">
              <MasterVendorSetup />
            </Route>
            <Route exact path="/warehouse">
              <Warehouse />
            </Route>
            <Route exact path="/reasonCodes">
              <Reason />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Header;
