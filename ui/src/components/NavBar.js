import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useUser } from '@/context/UserContext';
import useAuthService from '@/utils/AuthService';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
    '&:hover': {
        color: '#99F224',
    },
};

const links = [
    { href: '/', text: 'Home', style: { fontSize: 20, '&:hover': { color: '#99F224' } } },
    { href: '/price', text: 'Price', style: { fontSize: 20, px: 4, '&:hover': { color: '#99F224' } } },
];

function NavBar() {
    const { currentUser } = useUser()
    const { logout } = useAuthService()
    const router = useRouter()

    const renderLink = (href, text, additionalStyles, idx) => (
        <Link
            key={idx}
            variant="h6"
            underline="none"
            color={router.asPath === href ? '#35EBA9' : "white"}
            href={href}
            sx={{ ...additionalStyles, '&:hover': { color: '#35EBA9' } }}
        >
            {text}
        </Link>
    );

    const handleSignOut = () => {
        logout()
        router.push("/")
    }


    return (
        <div>
            <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
                <Toolbar sx={{ justifyContent: 'space-between', marginX: 20 }}>
                    <Box sx={{ flex: 1 }}>
                        {renderLink(null, 'Simpsite', { fontSize: 24 })}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
                        {links.map((link, idx) => renderLink(link.href, link.text, link.style, idx))}
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        {currentUser ? (
                            <>
                                <Typography sx={{ mx: 4 }}>Welcome back! {currentUser.email}</Typography>
                                <Button variant='outlined' onClick={() => handleSignOut()}>Sign Out</Button>
                            </>
                        ) : (
                            <>
                                {renderLink('/login', 'Sign In', { ...rightLink, color: router.asPath === '/login' ? '#35EBA9' : "white" })}
                                {renderLink('/register', 'Sign Up', { ...rightLink, color: router.asPath === '/register' ? '#35EBA9' : "white" })}
                            </>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default NavBar;
