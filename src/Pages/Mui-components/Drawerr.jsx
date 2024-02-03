import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Brightness4, Brightness7, Logout } from '@mui/icons-material';

import { useLocation, useNavigate } from 'react-router-dom';


const Drawerr = ({ drawerWidth, setMyMode, noneOrBlock, closeDrawer, drawerTyoe }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const pathName = useLocation();
    // eslint-disable-next-line no-lone-blocks
    {/*Data To Use Map Functionalty to  create the List Items */ }
    const Item = [
        { name: 'Home', icon: <HomeIcon />, path: '/' },
        { name: 'Create', icon: <CreateIcon />, path: '/create' },
        { name: 'Profile', icon: <PersonIcon />, path: '/profile' },
        { name: 'Setting', icon: <SettingsIcon />, path: '/settings' },
    ]
    // eslint-disable-next-line no-lone-blocks
    {/* Dark Mode amd Light */ }
    const handleCurrentMode = () => {
        localStorage.setItem("currentMode", theme.palette.mode === 'dark' ? 'light' : 'dark');
        setMyMode(theme.palette.mode === 'dark' ? 'light' : 'dark');
    }

    return (
        <Box component='nav'>
            <Drawer
                sx={{
                    display: { xs: noneOrBlock, sm: 'block', },
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant={drawerTyoe}
                anchor="left"
                open={true}
                onClose={() => {
                    closeDrawer()
                }}
            >

                <List>
                    {/* Dark Mode amd Light */}
                    <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                        <IconButton onClick={() => {
                            handleCurrentMode();
                        }} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7 sx={{ color: 'orange' }} /> : <Brightness4 />}
                        </IconButton>
                    </ListItem>
                    <Divider />

                    {/*Map through the menuItems and create ListItemLinks*/}
                    {
                        Item.map((item, index) => {
                            return (
                                <ListItem key={index} sx={{
                                    // @ts-ignore
                                    bgcolor:
                                        pathName.pathname === item.path ?
                                            // @ts-ignore
                                            theme.palette.favColor.main : null
                                }} disablePadding>
                                    <ListItemButton onClick={() => {
                                        navigate(item.path);
                                    }}>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }

                    {/*LogOut Button */}
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            navigate('/');
                        }}>
                            <ListItemIcon>
                                <Logout />
                            </ListItemIcon>
                            <ListItemText primary="LogOut" />
                        </ListItemButton>
                    </ListItem>


                </List>
            </Drawer>
        </Box>
    )
}

export default Drawerr
