import React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';
import SignalCellularAltSharpIcon from '@mui/icons-material/SignalCellularAltSharp';
import VolumeOffSharpIcon from '@mui/icons-material/VolumeOffSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { AppBar, Avatar, Tab, Tabs } from '@mui/material';
import MenuBar from '../common/MenuBar';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Title = () => {

    const location = useLocation()

  // tab
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // tabover
  return (
    <>
      <AppBar
        position="fixed"

        sx={{
          width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
          padding: 1, top: "80px"

        }}
        elevation={0}
      >
      
        <Typography variant="h6" noWrap component="div">
        {location.pathname == "/offer" ?
       <>Offersdvfd</> 
        :
        <>Paxful Trades</>
}
        </Typography>
        {/* <Box sx={{ bgcolor: 'background.paper', width: '100%' }} elevation={0}> */}
        {/* {location.pathname == "/trades" &&
        <AppBar position="static" elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            // indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          // sx={{ bgcolor: 'background.paper', width: '100%' }}
          >
            <Tab label="Active" {...a11yProps(0)} />
            <Tab label="All Trades" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
} */}
        {location.pathname == "/automeaning" &&
              
            
        <AppBar position="static" elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            // indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          // sx={{ bgcolor: 'background.paper', width: '100%' }}
          >
            <Tab label="AUTO MESSAGING RULES" {...a11yProps(0)} />
            <Tab label="FAVORITE MESSAGES" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
}
      </AppBar>
    </>
  )
}

export default Title