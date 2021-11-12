import { Button, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system'
import React,{useState,useEffect} from 'react'
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
function Manageproduct() {
    const [products,setProducts]=useState([]);

    useEffect(()=>{

          fetch("https://desolate-atoll-64898.herokuapp.com/products").then(res=>res.json()).then(data=>setProducts(data))

    },[products])

    
       
    const deleteproduct=(id)=>{
        const confirmdelete=window.confirm("Are you sure you want to delete this product?");
        if(confirmdelete){

            axios.delete(`https://desolate-atoll-64898.herokuapp.com/deleteproduct/${id}`).then(res=>{
                console.log(res)
                toast.success(res.data)
                const filterdata=products.filter(product=>product._id!==id);
                setProducts(filterdata);
             }).catch(err=>console.log(err))
            }
    }

    let i=0;
    return (
        <Box>
          <title>Manage product</title>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                 <Typography variant="h4">My orders</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Serial</StyledTableCell>
                                <StyledTableCell align="right">Product name</StyledTableCell>
                                <StyledTableCell align="right">Product price</StyledTableCell>
                               
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            <ToastContainer />
                             {
                                 
                                 products.map((product)=>{
                                     i++
                                   return(
                                        <StyledTableRow key={product._id}>
                                          <StyledTableCell component="th" scope="row">{i}</StyledTableCell>
                                          <StyledTableCell align="right">{product.name}</StyledTableCell>
                                          <StyledTableCell align="right">{product.price}</StyledTableCell>
                                          
                                          <StyledTableCell align="center">
                                             
                                                <Button onClick={()=>deleteproduct(product._id)} variant="contained">Delete</Button>
                                                
                                          </StyledTableCell>
                                
                                         </StyledTableRow>
                                   )

                                 })
                               }
                               
                            
                            </TableBody>
                        </Table>
                        </TableContainer> 
                </Grid>
               
            </Grid>
        </Box>
    )
}

export default Manageproduct;


