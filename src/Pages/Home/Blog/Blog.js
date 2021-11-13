import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Blog() {
    return (
        <Box className="blog-wrapper">
            <Container sx={{marginBottom:"50px"}}>
                <Typography variant="h4" sx={{textAlign:"center",mb:3}}>What's Hot Now&reg; Blog</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ display: 'flex',boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column',padding:"20px"}}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Blog one
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Jhon thomas
                            </Typography>
                            </CardContent>
                            <Typography>Yukon AT4 has a special type of versatility. Ultimately,boundless comfort and classy styling helped lead Yukon to the prize.</Typography>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: "300px" }}
                            image="https://i.postimg.cc/YCsg2pRR/blogimage1.jpg"
                            alt="Live from space album cover"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card sx={{ display: 'flex',boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column',padding:"20px"}}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Our Garage
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Michel radison
                            </Typography>
                            </CardContent>
                            <Typography>it’s clear that Yukon AT4 has Ultimately, its dynamic off-road features, boundless comfort and classy styling helped lead Yukon to the prize.</Typography>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: "300px" }}
                            image="https://i.postimg.cc/t48dN3DN/carbanner.jpg"
                            alt="Live from space album cover"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card sx={{ display: 'flex',boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                       <CardMedia
                            component="img"
                            sx={{ width: "300px" }}
                            image="https://i.postimg.cc/htjTqJLh/blogimage2.jpg"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column',padding:"20px"}}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Upcomming car
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                               Andrew flintof
                            </Typography>
                            </CardContent>
                            <Typography>Ultimately, its dynamic off-road features, boundless comfort and classy styling helped lead Yukon to the prize.</Typography>
                        </Box>
                        
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card sx={{ display: 'flex',boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                       <CardMedia
                            component="img"
                            sx={{ width: "300px" }}
                            image="https://i.postimg.cc/zXWHq4nC/car9.jpg"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column',padding:"20px"}}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Blog four
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Tom cruis
                            </Typography>
                            </CardContent>
                            <Typography>These Bollinger vehicles look more like Soviet military equipment than six-figure luxury cars. </Typography>
                        </Box>
                        
                    </Card>
                </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Blog
