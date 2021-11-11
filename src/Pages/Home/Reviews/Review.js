import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState,useEffect} from 'react'
import StarIcon from '@mui/icons-material/Star';

function Review() {
    const [allreviews,setAllreviews]=useState([]);
   
    useEffect(()=>{

        fetch("http://localhost:5000/reviews").then(res=>res.json()).then(data=>setAllreviews(data))

  },[])
    return (
        <Box className="reviews-wrapper" sx={{marginTop:"50px",marginBottom:"50px"}}>
           
            <Container>
              <Typography variant="h5" sx={{fontWeight:"bold",mb:3}}>What's our customer say's</Typography>
              
              <Grid container spacing={2}>
             
                    {
                        
                        allreviews.map((review)=>{
                        return (
                              
                   <Grid item xs={12} sm={6} md={4}>
                     <Card sx={{ }}>
                       <CardHeader
                        avatar={
                        <Avatar sx={{}} aria-label="recipe">
                            {review.username.slice(0,1)}
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            
                        </IconButton>
                        }
                        title={review.username}
                        subheader={review.reviewdate}
                    />

                    <CardContent>
                    {
                        [...Array(review.rating).keys()]
                        .map(()=>{
                        return <StarIcon sx={{color:"goldenrod"}}/>})
                    }
                        
                        <Typography variant="body2" color="text.secondary"sx={{mt:1}}>
                         {review.reviewtext.slice(0,100)}.
                        </Typography>
                        
                    </CardContent>
                    
                    </Card>  
                  </Grid>
             
               
                        )})

                       
                    }
             </Grid>
           </Container>
        </Box>
    )
}

export default Review
