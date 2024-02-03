import { Menu } from '@mui/icons-material'
import { AppBar, Avatar, Link, Toolbar, Typography, IconButton } from '@mui/material'

const Appbar = ({ drawerWidth, showDrawer }) => {
    return (
        <AppBar sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { xs: 0, sm: `${drawerWidth}px` } }} position="static">
            <Toolbar>
                <IconButton color='inherit' onClick={() => {
                    showDrawer()
                }} sx={{
                    mr: '10px',
                    display: { sm: 'none' }
                }}>
                    <Menu />
                </IconButton>
                <Link href='/' underline='none' color='inherit' sx={{ flexGrow: 1, ":hover": { fontSize: '16.5px' } }}>My Expenses</Link>
                <Typography sx={{ mr: 2, }} variant="body1" color="inherit">Nader Mamdouh</Typography>
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            </Toolbar>
        </AppBar>
    )
}

export default Appbar
