import { useEffect, useState } from 'react'
import './Home.css'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import axios from 'axios'


const Home = (props) => {
    const [myData, setmyData] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3100/myData')
            .then(res => { setmyData(res.data); })
    }, []);


    const handleIconDelete = (item) => {
        axios.delete(`http://localhost:3100/myData/${item.id}`);
        const newArr = myData.filter((myObject) => {
            return myObject.id !== item.id;
        })
        setmyData(newArr);
    }

    let totalPrice = 0;
    return (
        <Box>
            {
                myData.length >= 1 ? myData.map((item) => {
                    totalPrice += item.price
                    return (
                        <Paper key={item.id} sx={{
                            position: 'relative',
                            mt: '15px',
                            pt: '27px',
                            pb: '7px',
                            width: '366px',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            {/*  Title */}
                            <Typography sx={{ ml: '16px', fontSize: '1.3em' }} variant="h6">{item.title}</Typography>
                            {/*  Salary */}
                            <Typography sx={{
                                mr: '33px',
                                fontWeight: 500,
                                fontSize: '1.4em',
                                opacity: '0.8'
                            }} variant="h6">{item.price}$</Typography>

                            {/* Icon Delete */}
                            <IconButton
                                onClick={() => {
                                    handleIconDelete(item);
                                }}
                                sx={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '0'
                                }}>
                                <Close sx={{ fontSize: '20px' }} />
                            </IconButton>
                        </Paper>
                    )
                }) : (
                    <Typography variant="h4" color="inherit">There is No Data Yet!</Typography>
                )
            }

            <Typography mt='22px' textAlign='center' variant="h6" >👉You Spend ${totalPrice} </Typography>

        </Box>
    )
}

export default Home
