import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import TextareaAutosize from '@mui/core/TextareaAutosize';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function Addproduct() {
    const { register, handleSubmit,formState: { errors },reset } = useForm();
    const onSubmit = data =>{
        axios.post(`http://localhost:5000/addproduct`,data)
        .then(res=>{
          if(res.insertedId){
              toast.success("product inserted successfully")
          }else{
              toast.error("product already exists")
          }
            
        })
        .catch(err=>console.log(err))
        reset();

    }
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} className="reviewform">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <ToastContainer />
                       <Typography variant="h4" style={{textAlign:"center",marginBottom:"30px"}}>Add a product</Typography>
                       
                    
                        <TextField   {...register("name",{ required: true })} id="standard-basic" sx={{display:"block"}} label="Product name" variant="standard" />
                        <Typography sx={{color:"red"}}>{errors.name && <span>product name is required</span>}</Typography>
                       
                       <TextField {...register("price", { required: true })} id="standard-basic"  sx={{display:"block"}}  label="Product price" variant="standard" />
                       <Typography sx={{color:"red"}}>{errors.price && <span>price is required</span>}</Typography>
                       
                       <TextField {...register("img", { required: true })} id="standard-basic"  sx={{display:"block"}}  label="Image url" variant="standard" />
                       <Typography sx={{color:"red"}}>{errors.img && <span>img url is required</span>}</Typography>
                       <TextareaAutosize
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                {...register("description", { required: true })}
                                style={{ width: "100%",height:"200px",marginTop:"20px" }}
                                />
                       <Typography sx={{color:"red"}}>{errors.description && <span>product description is required</span>}</Typography>
                       <Button type="submit" variant="contained" style={{marginTop:"30px",width:"100%",marginBottom:"20px"}}>Add product</Button>
                       
                     </form>

                </Grid>
                
            </Grid>
        </Box>
    )
}

export default Addproduct
