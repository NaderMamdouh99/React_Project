import React from 'react'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'

const NotFound = (props) => {
    const theme = useTheme()
    return (
        <Typography variant="h4" sx={{ color: theme.palette.error.main }} >There is Not Page Now</Typography>
    )
}

export default NotFound
