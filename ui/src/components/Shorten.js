import React, { useState } from 'react'
import { Button, TextField, Box, Typography, Link, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import ShortenForm from './ShortenForm';
import ShortenWrapper from './ShortenWrapper';

const Shorten = () => {
    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        // encodeURI(longUrl, setShortUrl)
        console.log("submit");
    }

    return (
        <Box sx={{ width: '100%', textAlign: 'center', bgcolor: 'grey.800' }}>

            <Box sx={{ mx: 5 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder='Enter your URL...'
                    type='url'
                    value={longUrl}
                    onChange={e => setLongUrl(e.target.value)}
                    startAdornment={<SearchIcon sx={{ color: '#c5cae9' }} />}
                    sx={{ my: 2 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mx: 2, width: 200, my: 2 }}
                    onClick={handleSubmit}
                >
                    Shorten
                </Button>
                {shortUrl && (
                    <Paper elevation={3} sx={{ py: 2, px: 3, my: 2 }}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="body1">Original Url: {longUrl}</Typography>
                            <Typography variant="body1">Short Url: <Link href={longUrl}>{shortUrl}</Link></Typography>
                        </Box>
                    </Paper>
                )}
            </Box>
        </Box>
    )
}

export default Shorten