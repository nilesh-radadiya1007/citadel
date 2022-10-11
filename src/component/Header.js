import React from 'react'

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';
import SignalCellularAltSharpIcon from '@mui/icons-material/SignalCellularAltSharp';
import VolumeOffSharpIcon from '@mui/icons-material/VolumeOffSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { AppBar, Avatar, Button, Card, Link, Tab, Tabs, Tooltip, Badge } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { VolumeUpOutlined } from '@mui/icons-material';

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

function Header() {
  const [open, setOpen] = React.useState(false);
  const [toggle, settoggle] = React.useState(false);

  const soundClick = () => {
    settoggle(!toggle)
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const Open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // tab
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  // tabover

  const products = [
    {
      title: "product 1",
    },
    {
      title: "product 2",
    },
    {
      title: "product 3",
    },
  ];
  return (
    <>
      <AppBar
        position="fixed"
        color='info'

        sx={{
          width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
          // padding: 1px
          px: 1,
          py: 0,
        
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          {/* <MenuSharpIcon /> */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title="Click to view timesheet.">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2, p: 0, mx: 1 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <TimerSharpIcon sx={{ color: 'white' }} />
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={Open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    // p: 2,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <Typography variant='h5' sx={{ mb: 1, p: 1 }} display="block" >Timesheet </Typography>
                <Divider />
                <Card elevation={1} sx={{ p: 1, m: 2, marginBottom: "10px" }}  >
                  <Typography variant="caption" sx={{ mb: 0, p: 1 }} display="block" > CLOCK IN/OUT </Typography>
                  <Typography variant="caption" sx={{ mb: 0, p: 1 }} display="block"  > Currently clocked for task Trading  </Typography>

                  <Typography variant="caption" sx={{ mb: 2, p: 1 }}   > 04:35:44 </Typography>

                  <Button variant="contained" color="info" size="small" sx={{ mt: 2, p: 1 }} style={{ display: "block", marginLeft: "auto", fontSize: "11px", textTransform: "uppercase" }} >Clock Out</Button>
                </Card>
                <Divider />
                <Link
                  component="button"
                  variant="body2"
                  underline="none"
                  style={{
                    display: "flex",
                    marginLeft: "auto",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                  sx={{ p: 1, color: "#0288d1" }}
                >
                  close {" "} <ExitToAppIcon color='info' ></ExitToAppIcon>
                </Link>

              </Menu>
              <Tooltip title="">
                <IconButton sx={{ mx: 1 }} >
                  <SignalCellularAltSharpIcon sx={{ color: 'white' }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Press to enable sounds">
                <IconButton sx={{ mx: 1 }} onClick={soundClick}>
                  {toggle ?
                    <VolumeUpOutlined sx={{ color: 'white' }} />
                    :
                    <VolumeOffSharpIcon sx={{ color: 'white' }} />
                  }
                </IconButton>
              </Tooltip>

              <Tooltip title="notification">
                <IconButton sx={{ mx: 1 }} >
                  <Badge badgeContent={4} color="warning">
                    <NotificationsSharpIcon sx={{ color: 'white' }} />
                  </Badge>
                </IconButton>
              </Tooltip>

              <IconButton sx={{ mx: 1 }}  >
                <Avatar sx={{ bgcolor: '#4caf50', width: "24px", height: "24px", padding: "10px", fontSize: "12px" }}>OP</Avatar>
              </IconButton>
            </Box>

          </Box>
        </Toolbar>

      </AppBar>

    </>
  )
}

export default Header