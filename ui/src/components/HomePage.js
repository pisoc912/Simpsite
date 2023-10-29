import { Button, Container, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const router = useRouter();

    const [typedText, setTypedText] = useState('');

    const handleRegister = () => {
        window.sessionStorage.removeItem('userdetails');
        router.push('/register');
    };

    useEffect(() => {
        const textArray = ['HTTP://', 'WWW.', '.COM'];
        let currentIndex = 0;

        const typeText = () => {
            setTypedText(textArray[currentIndex]);
            currentIndex++;
            if (currentIndex >= textArray.length) {
                currentIndex = 0;
            }
        };

        const interval = setInterval(typeText, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Container
            sx={{
                mt: 14,
                mb: 14,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#25B87F',
                width: '100%',
                maxWidth: 800,
                p: 7,
            }}>
            <Typography variant="body1" sx={{ color: 'indigo.600', fontWeight: 'bold', mb: 2 }}>
                We’ve expanded!
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Shorten URLs
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Generate QR Codes.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mr: 1 }}>
                    And now, create
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    {typedText}
                </Typography>
            </Box>
            <Button variant='outlined' size='large' sx={{
                mt: 10, minHeight: 10, borderBlockColor: '#4FB891', color: '#4FB891',
                '&:hover': {
                    backgroundColor: '#4FB891',
                    borderColor: '#4FB891',
                    color: 'white',
                    boxShadow: 'none',
                },
            }} onClick={handleRegister}>
                Get Started For Free
            </Button>
        </Container>
    );
};

export default HomePage;
