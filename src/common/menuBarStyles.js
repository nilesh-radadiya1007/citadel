import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "left",
    backgroundColor: "#263238"
  },
  drawer: {
    width: "250px",
  },
  item: {
    // color: "blue",
    display: 'flex',
    justifyContent: "space-between",
    paddingTop: 0,
    paddingBottom: 0,
    
  },
  button: {
    color: colors.grey[50],
    padding: '10px 8px',
    display: "flex",
    justifyContent: 'space-between',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  
  },
  btnRoot: {
    // paddingLeft: "25px",
    // padding: "10px",
    // backgroundColor: "green"
    // justifyContent: "left !important"
    
  },
  subMenu: {
    // paddingLeft: "50px !important",
    padding: "10px",
    display: "flex",
    justifyContent: "flex-start"
  }
}));

export default useStyles;
