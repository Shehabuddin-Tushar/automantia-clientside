import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom'

import { SRLWrapper } from "simple-react-lightbox";
import './Footer.css'
function Footer() {
    return (
        <Box className="footer-wrapper" sx={{bgcolor:"#000",padding:"50px 0px"}}>
            
            <Container>

               <Grid container spacing={2}>
               <Grid item xs={12} sm={12} md={6}>
                      <SRLWrapper>
                          <Box className="hotcar">
                            <Typography variant="h3" sx={{color:"#fff",fontSize:"30px",textAlign:"center",mb:3}}>Our new collection</Typography>
                            <Box>
                                    <img src="https://i.postimg.cc/BvJS9Vgn/car7.jpg"></img>
                                    <img src="https://i.postimg.cc/NF2Ykqgp/car4.jpg"></img>
                                    <img src="https://i.postimg.cc/WtRV9Wzj/car6.jpg"></img>
                            </Box>
                             <Box>
                                    <img src="https://i.postimg.cc/7P5TW5hQ/car8.jpg"></img>
                                    <img src="https://i.postimg.cc/ZRRJ0vXk/car3.jpg"></img>
                                    <img src="https://i.postimg.cc/W1GNyv0y/car5.jpg"></img>
                            </Box>
                          </Box>
                       </SRLWrapper> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="links">
                      <Typography variant="h3" sx={{color:"#fff",fontSize:"30px",textAlign:"center",mb:3}}>Quick link</Typography>
                        <ul>
                            <li><Link to="/home"><i class="fas fa-angle-double-right"></i> Home</Link></li>
                            <li><Link to="/products"><i class="fas fa-angle-double-right"></i> Products</Link></li>
                            <li><Link to="/login"><i class="fas fa-angle-double-right"></i> Login</Link></li>
                            <li><Link to="/login"><i class="fas fa-angle-double-right"></i> Review</Link></li>
                            <li><Link to="/myorders"><i class="fas fa-angle-double-right"></i> Myorders</Link></li>
                            <li><Link to="/dashboard"><i class="fas fa-angle-double-right"></i> Dashboard</Link></li>
                        </ul> 
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                    <Box className="contactus">
                         <Typography variant="h3" sx={{color:"#fff",fontSize:"30px",textAlign:"center",mb:3}}>Contact us</Typography>
                            <Typography sx={{color:"#fff"}}><Link to="/home"><i class="fas fa-phone-alt"></i> 01405130409</Link></Typography>
                            <Typography sx={{my:3}}>Matuail-jatrabari-1362</Typography>
                            <Typography sx={{mb:3}}>Automantia@gmail.com</Typography>
                            <Box className="social-link">
                                <a href="//twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="//www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                                <a href="//www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>

                            </Box>
                        </Box>
                    </Grid>
                   
                </Grid>
               </Container>
                   
              
               
                    
             
                
               
          
            
            
        </Box>
    )
}

export default Footer

