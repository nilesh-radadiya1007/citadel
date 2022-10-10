import React, { useState, forwardRef } from 'react';
import { List, ListItem, Collapse, Button, Drawer, Typography } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import clsx from 'clsx';
import menuItems from './SideBarItems';
import { ExpandLess, ExpandMore, ImportExport } from "@material-ui/icons";
import { NavLink as RouterLink } from 'react-router-dom';
import useStyles from './menuBarStyles';


const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 8,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

const MenuBar = (props) => {
  const [menu, setMenu] = useState({});
  const { className, ...rest } = props;
  const classes = useStyles();
  const handleClick = (item) => {
    let newData = { ...menu, [item]: !menu[item] };
    setMenu(newData);
  }
  const CustomRouterLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  ));
  const handleMenu = (children, level = 0) => {
    return children.map(({ children, path, name, name2, url, links }) => {
      if (!children) {
        return (
          <List component="div" disablePadding key={name}>
            <ListItem
              className={classes.item}
              disableGutters
              style={{ padding: "0px" }}
              key={name}
            >
              <Button
                className={clsx({
                  [classes.btnRoot]: true,
                  [classes.button]: true,
                  [classes.subMenu]: level
                })}
                component={CustomRouterLink}
                to={url}

              >
                {/* <ImportExport/> */}
                <div className='linkimg-wrap'>
                  <img src={path} />
                </div>

                {name}



              </Button>
            </ListItem>
          </List>
        )
      }
      return (
        <div key={name}>
          <ListItem
            className={classes.item}
            disableGutters
            key={name}
            onClick={() => handleClick(name)}
          >
            <Button
              className={clsx({
                [classes.btnRoot]: true,
                [classes.button]: true,
                [classes.subMenu]: level
              })}>


              <div >
                <h5 style={{ display: "block", fontSize: 14, margin: 0, textAlign: "left" }} >{name}</h5>
                <p style={{ display: "block", fontSize: 11, margin: 0, color: "#cfd8dc", textAlign: "left" }} >{name2}</p>
              </div>
              {menu[name] ? <ExpandLess style={{ color: '#29b6f6' }} /> : <ExpandMore />}
            </Button>
          </ListItem>
          <Collapse
            in={(menu[name]) ? true : false}
            timeout="auto"
            unmountOnExit
          >
            {handleMenu(children, 1)}
          </Collapse>
        </div>
      )
    })
  }

  return (
    <>
      <List {...rest} className={clsx(classes.root, className)} >
        {handleMenu(menuItems.data)}
      </List>
    </>
  )
}

export default MenuBar;
