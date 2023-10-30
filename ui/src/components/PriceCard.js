import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'


const subscriptions = [
    {
        "id": "basic",
        "name": "Basic Plan",
        "description": "Access to basic features",
        "price": "Free",
        "duration": "",
        "features": [
            "10 links/month",
            "5 custom back-halves",
            "Unlimited Link Clicks"
        ]
    },
    {
        "id": "premium",
        "name": "Premium Plan",
        "description": "Access to all features",
        "price": 29.99,
        "duration": "month",
        "features": [
            "100 links/month",
            "5 QR Codes/month",
            "30 days of click & scan data",
            "Unlimited Link Clicks",
        ]
    },
    {
        "id": "annual",
        "name": "Annual Plan",
        "description": "One year access with discount",
        "price": 299.99,
        "duration": "year",
        "features": [
            "500 links/month",
            "Complimentary custom domain*",
            "4 months of click & scan data",
            "Unlimited Link Clicks",
        ]
    }
]


const PriceCard = () => {

    return (

        <Box sx={{ borderColor: '#e0e0e0', borderWidth: 1, borderStyle: 'solid', borderRadius: '10px', mx: 30, bgcolor: '#fafafa', opacity: 0.6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <Typography variant='h3'>Pricing Plan</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: '80vh' }}>
                {subscriptions.map((item) => (
                    <Box elevation={0} key={item.id}
                        sx={{
                            flex: 1, height: "90%", mx: 4,
                            borderColor: '#e0e0e0', borderWidth: 1, borderStyle: 'solid', borderRadius: '10px',
                            bgcolor: '#f5f5f5',
                            transition: 'all 0.3s',
                            '&:hover': {
                                backgroundColor: '#e0e0e0', // 或者您想要的任何其他颜色
                                transform: 'scale(1.05)'
                            }
                        }}>
                        <Grid container spacing={4} direction="column" justifyContent="center" alignItems="stretch" sx={{ p: 10 }}>
                            <Grid item flex={1}>
                                <Typography variant='h4'>
                                    {item.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    {item.description}
                                </Typography>
                            </Grid>
                            <Grid item sx={{ height: '200px' }}>
                                {item.features.map(feature => (
                                    <Typography key={feature} sx={{ display: 'flex', py: 1 }}>
                                        <CheckCircleOutline sx={{ mr: 4 }} /> {feature}
                                    </Typography>
                                ))}
                            </Grid>
                            <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5 }}>

                                {item.price === "Free" ?
                                    <Typography variant='h3' color='#d50000'>${item.price}</Typography> :
                                    <><Typography variant='h3'>${item.price} /<Typography variant='h5' component="span" display="inline">{item.duration}</Typography></Typography> </>}
                            </Grid>

                            <Grid item>
                                <Button fullWidth variant='contained' size='large'
                                    sx={{
                                        bgcolor: '#00bfa5',
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}>
                                    Pay
                                </Button>
                            </Grid>

                        </Grid>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default PriceCard