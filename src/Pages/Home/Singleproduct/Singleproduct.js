import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import "./Singleproduct.css"
import { Link } from 'react-router-dom'
function Singleproduct({product}) {
    return (
        <>
           <Grid item xs={12} sm={6} md={4}>
                     <Card className="singleproduct">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="170"
                                image={product.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {product.description.slice(0,200)}
                                </Typography>
                            </CardContent>
                            <CardActions>
                              <Button variant="outlined" sx={{width:"50%"}} size="big">price : ${product.price}</Button>
                              <Link to={`/singleproduct/${product._id}`} className="singlepagebtn">Buy now</Link>
                            </CardActions>
                        </Card> 
                    </Grid>  
        </>
    )
}

export default Singleproduct
