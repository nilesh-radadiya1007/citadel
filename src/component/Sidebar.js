import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Home } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import MenuBar from '../common/MenuBar';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {

    let history = useHistory();
    const handledashboard = () =>{
        history.push('/dashboard');
    }
    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    backgroundColor: '#37474f',
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: "#37474f"
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <div className='sidebar-logo'>
                    Citadel
                </div>

                <Divider />
                <div className='sidebar-title' onClick={handledashboard}>
                    <Home />CryptoSadie
                </div>
                <Divider />
                    <MenuBar />
                <Divider />
            </Drawer>
        </>
    )
}

export default Sidebar