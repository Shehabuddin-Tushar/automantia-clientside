import { Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { useForm } from "react-hook-form"
import {ToastContainer, toast } from 'react-toastify'
import TextareaAutosize from '@mui/core/TextareaAutosize';
import 'react-toastify/dist/ReactToastify.css'
import './Addreview.css'
import axios from 'axios'
function Addreview() {

    const {user}=useAuth();
    const { register, handleSubmit,formState: { errors },reset } = useForm();
    const [reviewnumber, setReviewnumber] = React.useState();

    const handleChange = (event) => {
      setReviewnumber(event.target.value);
    };
    const onSubmit = data =>{
        axios.post(`http://localhost:5000/savereview`,data)
        .then(res=>{
           toast.success("your review add successfully")
            
        })
        .catch(err=>console.log(err))
        reset();

    }
    return (
        <Box className="review-wrapper">
           <Grid container spacing={2}>
                <Grid item xs={12} md={6} className="reviewform">
                   
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ToastContainer />
                       <Typography variant="h4" style={{textAlign:"center",marginBottom:"30px"}}>Add your valuable review for our product</Typography>
                       
                       {user.displayName && 
                         <TextField value={user.displayName}  {...register("username")} id="standard-basic" sx={{display:"block"}} label="Username" variant="standard" />
                       }
                       
                       <TextField type="date" {...register("reviewdate", { required: true })} id="standard-basic"  sx={{display:"block"}}   variant="standard" />
                       <Typography sx={{color:"red"}}>{errors.reviewdate && <span>Reviewdate is required</span>}</Typography>
                       
                       <InputLabel id="demo-simple-select-label" sx={{marginTop:"20px"}}>Rating the product</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                {...register("rating", { required: true })}
                                value={reviewnumber}
                                label="Rating the product"
                                onChange={handleChange}
                                sx={{width:"300px"}}
                                
                            >
                                <MenuItem value={0}>zero star</MenuItem>
                                <MenuItem value={1}>one star</MenuItem>
                                <MenuItem value={2}>Two star</MenuItem>
                                <MenuItem value={3}>Three star</MenuItem>
                                <MenuItem value={4}>Four star</MenuItem>
                                <MenuItem value={5}>Five star</MenuItem>
                            </Select>
                            <Typography sx={{color:"red"}}>{errors.rating && <span>Rating is required</span>}</Typography>
                           <TextareaAutosize
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                {...register("reviewtext", { required: true })}
                                style={{ width: "100%",height:"200px",marginTop:"20px" }}
                                />
                            <Typography sx={{color:"red"}}>{errors.reviewtext && <span>Review is required</span>}</Typography>

                       <Button type="submit" variant="contained" style={{marginTop:"30px",width:"100%",marginBottom:"20px"}}>Add review</Button>
                       
                     </form>   
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default Addreview
