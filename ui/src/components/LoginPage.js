import React, { useState } from 'react'
import { Box, Button, TextField, Typography, Paper, Avatar, Container } from '@mui/material';
import { useRouter } from 'next/router';
import authServiceInstance from '@/utils/AuthService';
import { useUser } from '@/context/UserContext';
import useAuthService from '@/utils/AuthService';

const LoginPage = () => {
    const { register, login, logout } = useAuthService();

    const [user, setUser] = useState({
        email: '',
        pwd: '',
    });
    const [error, setError] = useState('')
    const { setCurrentUser } = useUser()
    const router = useRouter()

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(user);
        login(user.email, user.pwd).then(response => {
            if (response) {
                console.log(response.email);
                setCurrentUser({ name: response.email })
                router.push("/")
            }
        })
    }

    return (
        <Container>
            <Box display="flex" flexDirection="column" justifyContent="center" px={6} py={12}>
                <Box mx="auto">
                    <Typography variant="h4" mt={5} color={"#4FB891"} textAlign="center">Login to your account</Typography>
                </Box>
                <Box variant="outlined" mt={5} sx={{ px: 40 }} >
                    <form noValidate autoComplete="off" onSubmit={handleLogin} spacing={3}>
                        <Box mt={3}>
                            <TextField
                                fullWidth
                                id="email"
                                label="Email"
                                name='email'
                                variant="outlined"
                                type="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />
                        </Box>

                        <Box mt={3}>
                            <TextField
                                fullWidth
                                id="password"
                                label="Password"
                                name="pwd"
                                variant="outlined"
                                type="password"
                                value={user.pwd}
                                onChange={handleChange}
                                required
                            />
                        </Box>

                        {error && (
                            <Typography variant="body2" color="error">{error}</Typography>
                        )}

                        <Box mt={10}>
                            <Button fullWidth variant="contained" type="submit" sx={{ bgcolor: "#4FB891" }}>
                                Login
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Container>
    )
}

export default LoginPage