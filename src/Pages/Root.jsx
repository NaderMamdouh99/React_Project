import { useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from './Mui-components/Appbar'
import Drawerr from './Mui-components/Drawerr';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getDesignTokens from './styles/MyThemes';

const Root = (props) => {
    // eslint-disable-next-line no-lone-blocks
    {/* Dark Mode and Light*/ }
    const [mode, setMyMode] = useState(
        localStorage.getItem("currentMode") === null
            ? 'light'
            : localStorage.getItem("currentMode") === 'light'
                ? 'light' : 'dark'
    )
    // eslint-disable-next-line no-lone-blocks
    {/*Get  Design Tokens for the theme */ }
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    // eslint-disable-next-line no-lone-blocks
    {/* Controller for Drawer Display and Drawer Type */ }
    const [noneOrBlock, setnoneOrBlock] = useState("none");
    const [drawerTyoe, setdrawerTyoe] = useState('permanent');
    const showDrawer = () => {
        setnoneOrBlock("block");
        setdrawerTyoe('temporary');
    }
    const closeDrawer = () => {
        setnoneOrBlock('none')
        setdrawerTyoe('permanent')
    }
    const drawerWidth = 240;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box component='body'>
                <Appbar {...{ drawerWidth, showDrawer }} />
                <Drawerr {...{ drawerWidth, setMyMode, noneOrBlock, drawerTyoe, closeDrawer }} />
                <Box component='main' sx={{
                    ml: { sm: `${drawerWidth}px` },
                    display: 'flex',
                    justifyContent: 'center',
                    mt: '50px'
                }} >
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Root
