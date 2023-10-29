import React, { useState } from 'react'
import { Router, useRouter } from 'next/router';
import { Box, Button, TextField, Typography, Paper, Avatar, Container } from '@mui/material';
import * as yup from 'yup';
import AuthService from '@/utils/AuthService';

// const RegisterSchema = yup.object().shape({
//     username: yup.string().min(2, "Username too short.").required('Username is required.'),
//     email: yup.string().email('Invalid email').required('Email is required.'),
//     pwd: yup.string().min(6, "Password must be at least 6 characters").required('Password is required.'),
//     roles: yup.array().of(yup.string()).min(1, "At least one role is required.")
// })
const RegisterPage = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        pwd: '',
        roles: []
    });
    const [error, setError] = useState('')
    const router = useRouter()

    const handleChange = (e) => {
        console.log(e.target.name);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(user);
        registerUser(user, setError)
    }

    // const handleRegister = (e) => {
    //     e.preventDefault()
    //     AuthService.register(user.username, user.email, user.pwd, user.roles)
    //         .then(() => {
    //             router.push("/login");
    //         })
    //         .catch(err => {
    //             const resMessage = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    //             setError(resMessage);
    //         })
    // }

    return (
        <Container>
            <Box display="flex" flexDirection="column" justifyContent="center" px={6} py={12}>
                <Box mx="auto">
                    <Typography variant="h4" mt={5} color={"#4FB891"} textAlign="center">Sign Up to your account</Typography>
                    <TextField
                        label="With normal TextField"
                        id="outlined-start-adornment"
                        fullWidth
                        sx={{ m: 1 }}

                    />
                </Box>
                <Box variant="outlined" mt={5} sx={{ px: 40 }} >
                    <form noValidate autoComplete="off" onSubmit={handleRegister} spacing={3}>
                        <Box mt={3}>

                            <TextField
                                fullWidth
                                id="username"
                                label="Username"
                                name='username'
                                variant="outlined"
                                value={user.username}
                                onChange={handleChange}
                                required
                            />
                        </Box>

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
                                name='pwd'
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
                                Register
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Container>
    )
}

export default RegisterPage