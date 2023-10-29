import { Box, Button, Card, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';

const ShortenPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TextField
                label="With normal TextField"
                id="outlined-start-adornment"
                fullWidth
                sx={{ m: 1 }}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                }}
            />

            <Box sx={{ display: 'flex', minHeight: 60, alignItems: 'center' }}>
                <Button variant='contained' endIcon={<SendIcon />}>Submit</Button>
            </Box>
        </Box>

    )
}

export default ShortenPage