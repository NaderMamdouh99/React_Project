import { useState } from 'react'
import './Create.css'
import { Box, Button, InputAdornment, TextField, useTheme } from '@mui/material'
import { ChevronRight } from '@mui/icons-material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Create = (props) => {
    const theme = useTheme();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0);
    const Navigate = useNavigate();
    const handleButtonSubmit = () => {
        axios.post('http://localhost:3100/myData', {
            title,
            price
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        Navigate('/')
    }

    return (
        <Box autoComplete='off' sx={{ width: '380px' }} component='form'  >
            {/* Transactiorn Title */}
            <TextField
                fullWidth
                onChange={(eo) => {
                    setTitle(eo.target.value);
                }}
                label="Transactiorn Title"
                id="filled-start-adornment"
                sx={{ mt: '22px', display: 'block' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">👉</InputAdornment>,
                }}
                variant="filled"
            />

            {/* Amount Field */}
            <TextField
                onChange={(eo) => {
                    setPrice(Number(eo.target.value))
                }
                }
                fullWidth
                label="Amount"
                id="filled-start-adornment"
                sx={{ mt: '22px', display: 'block' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                variant="filled"
            />
            <Button onClick={() => {
                handleButtonSubmit();
            }}
                sx={{ mt: '22px', bgcolor: theme.palette.primary.main }}
                variant="contained"
                endIcon={<ChevronRight />}>
                Submit
            </Button>

        </Box>
    )
}

export default Create
