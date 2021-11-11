import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import './Topbanner.css'
function Topbanner() {
    return (
        <Box className="banner-wrapper">
         <Container>
           <Grid container spacing={2}>
                <Grid item xs={12} md={6}  sx={{mt:10}}>
                   <Typography variant="h2" sx={{fontWeight:"500",marginBottom:"10px",textShadow:"2px 4px 3px rgba(0,0,0,0.3)"}}>Purchase your perfect car</Typography> 
                   <Typography sx={{mb:1,wordSpacing:5,lineHeight:"30px",textShadow:"2px 4px 3px rgba(0,0,0,0.3)"}}>Automantia is the safest way of buying a new car. Before purchase we first of all carefully examine the chosen car and you then decide on the basis of its current condition and our recommendation.</Typography> 

                   <Link to="/products" className="explorebtn" >Explore</Link>  
                </Grid>
                <Grid item xs={12} md={6} sx={{mt:10}}>
                    <img src="https://i.postimg.cc/cJPGMb84/bannerimg.png" width="100%" alt="img-banner"/>
                </Grid>
                
            </Grid>
           </Container>
        </Box>
    )
}

export default Topbanner
