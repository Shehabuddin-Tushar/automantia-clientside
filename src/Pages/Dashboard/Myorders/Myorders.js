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
import { Link, NavLink } from 'react-router-dom';
import './Myorders.css'
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
  
function Myorders() {
     const [myordersdata,setMyordersdata]=useState([]);
     
     const {user}=useAuth();
  

     useEffect(()=>{

        axios.get(`https://desolate-atoll-64898.herokuapp.com/myorders?email=${user.email}`)
        .then(res=>{
          setMyordersdata(res.data);
        
        }).catch(err=>console.log(err))

     },[myordersdata]);
  

    const deleteorder=(id)=>{
        const confirmdelete=window.confirm("Are you sure you want to delete this data?");
        if(confirmdelete){

            axios.delete(`https://desolate-atoll-64898.herokuapp.com/deleteorder/${id}`).then(res=>{
                 console.log(res)
                toast.success(res.data)
                const filterdata=myordersdata.filter(product=>product._id!==id);
                setMyordersdata(filterdata);
                
     
           }).catch(err=>console.log(err))
            }
        }

      
       

    return (
        <Box>
          <title>My orders</title>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                 <Typography variant="h4" sx={{mb:2}}>My orders</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell align="right">Product name</StyledTableCell>
                                <StyledTableCell align="right">Product price</StyledTableCell>
                                <StyledTableCell align="right">Status</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            <ToastContainer />
                             {
                                 myordersdata.map((product)=>{
                                   return(
                                        <StyledTableRow key={product._id}>
                                          <StyledTableCell component="th" scope="row">{product.email}</StyledTableCell>
                                          <StyledTableCell align="right">{product.productdetails.name}</StyledTableCell>
                                          <StyledTableCell align="right">{product.productdetails.price}</StyledTableCell>
                                          <StyledTableCell align="right">{product.status}</StyledTableCell>
                                          <StyledTableCell align="center">
                                             
                                              {product.paymentdetails?<Button>paid</Button>: <NavLink className="paymentlink" to={`/dashboard/payment/${product._id}`}><Button variant="contained">Pay</Button></NavLink>}
                                              <Button onClick={()=>deleteorder(product._id)} variant="contained">Delete</Button>
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

export default Myorders

