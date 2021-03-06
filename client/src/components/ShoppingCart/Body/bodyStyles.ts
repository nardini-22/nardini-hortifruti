import { makeStyles } from "@material-ui/core";

export const bodyStyles = makeStyles({
  listItems: {
    display: "flex!important",
    justifyContent: "space-between",
    margin: "5px auto",
    padding: 10,
    alignItems: "center",
    width: "50%",
    boxShadow: "0px 1px 4px -1px #000000",
    "@media (max-width:780px)": {
      width: "95%",
    },
  },
  buttonGroup: {
    display: "flex",
    margin: "15px",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "50%",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
  },
  buttonIcon: {
    display: "flex",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width:780px)": {
      display: "none",
    },
  },
  buttonText: {
    display: "block",
    color: "#fff",
    "@media (max-width:780px)": {
      display: "none",
    },
  },
  secondaryButtonText: {
    display: "block",
    "@media (max-width:780px)": {
      display: "none",
    },
  },
  secondaryButtonIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width:780px)": {
      display: "none",
    },
  },
});
