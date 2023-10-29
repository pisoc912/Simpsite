import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useUser } from '@/context/UserContext';

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

function AppAppBar() {
    const { currentUser } = useUser()
    console.log({ currentUser });
    const router = useRouter()

    const renderLink = (href, text, additionalStyles = {}) => (
        <Link
            variant="h6"
            underline="none"
            color={router.asPath === href ? '#35EBA9' : "white"}
            href={href}
            sx={{ ...additionalStyles, '&:hover': { color: '#35EBA9' } }}

        >
            {text}
        </Link>
    );

    return (
        <div>
            <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
                <Toolbar sx={{ justifyContent: 'space-between', marginX: 20 }}>
                    <Box sx={{ flex: 1 }}>
                        {renderLink(null, 'Simpsite', { fontSize: 24 })}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
                        {links.map(link => renderLink(link.href, link.text, link.style))}
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        {currentUser ? (
                            <Typography>{currentUser.name}</Typography>  // Assuming `user` is an object with a `name` property
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

export default AppAppBar;
