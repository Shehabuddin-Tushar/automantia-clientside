import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {useParams } from 'react-router-dom'
import Navbar from '../../Shared/Header/Navbar'
import { SRLWrapper } from "simple-react-lightbox";
import './Singlepage.css'
import Footer from '../../Shared/Footer/Footer'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Singlepage() {
    const [product,setProduct]=useState({});
    const {id}=useParams();
    const { register, handleSubmit,formState: { errors },reset } = useForm();
    const onSubmit = data =>{
         
         data.productdetails=product;
         axios.post(`https://desolate-atoll-64898.herokuapp.com/ordersave`,data)
         .then(res=>{
            toast.success("your order successfully")
             
         })
         .catch(err=>console.log(err))
         reset();
        }

    const {user}=useAuth();
    
    useEffect(()=>{
         axios.get(`http://localhost:5000/product/${id}`).then(res=>setProduct(res.data)).catch(err=>console.log(err));
    },[])
    return (
        
        <Box className="singlepage-wrapper" sx={{}}>
           <Navbar/>
           <Container sx={{mb:5}}>
           <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt:20}}>
                    <SRLWrapper>
                        <img width="100%" src={product.img} alt="image name" className="productimage"/>
                    </SRLWrapper>
                    <Typography variant="h4" sx={{mt:5,fontWeight:"bold"}}>Name: {product.name} </Typography>
                    <Typography variant="h5" sx={{mt:1,fontWeight:"bold"}}>Price: ${product.price}</Typography>
                    <Typography variant="body1" sx={{mt:2,textAlign:"justify"}}><Typography sx={{fontWeight:"bold",mb:1,fontSize:"20px"}}>Description:</Typography> {product.description}</Typography>
                      
                </Grid>
                <Grid item xs={12} md={6} className="placeorderform" sx={{mt:0}}>


                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ToastContainer />
                       <Typography variant="h4" style={{textAlign:"center",marginBottom:"30px"}}>Fill the information form</Typography>
                       
                       {user.displayName && 
                         <TextField value={user.displayName}  {...register("username")} id="standard-basic" sx={{display:"block"}} label="Username" variant="standard" />
                       }
                       <TextField value={user.email} {...register("email")} id="standard-basic"  sx={{display:"block"}}  label="Email" variant="standard" />
                       <TextField {...register("address", { required: true })} id="standard-basic"  sx={{display:"block"}}  label="Address" variant="standard" />
                       <Typography sx={{color:"red"}}>{errors.address && <span>Address is required</span>}</Typography>
                       <input {...register("status")} type="hidden" value="Pending"/>
                       <TextField {...register("phone", { required: true })} id="standard-basic"  sx={{display:"block"}}  label="Phone" variant="standard" />
                       <Typography sx={{color:"red"}}>{errors.phone && <span>Phone is required</span>}</Typography>

                       <Button type="submit" variant="contained" style={{marginTop:"30px",width:"100%",marginBottom:"20px"}}>Place order</Button>
                       
                     </form>


                </Grid>
                
                </Grid>
           </Container>
           <Footer/>
        </Box>
    )
}

export default Singlepage
