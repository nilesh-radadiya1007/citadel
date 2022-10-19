import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "left",
    backgroundColor: "#263238"
  },
  drawer: {
    width: "250px",
  },
  item: {
    display: 'flex',
    justifyContent: "space-between",
    paddingTop: 0,
    paddingBottom: 0,
    
  },
  button: {
    padding: '10px 8px',
    display: "flex",
    justifyContent: 'space-between',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  
  },
  btnRoot: {
    paddingLeft: "25px",
    padding: "10px",
    justifyContent: "space-between !important"
    
  },
  subMenu: {
    padding: "10px",
    display: "flex",
    justifyContent: "flex-start"
  }
}));

export default useStyles;
