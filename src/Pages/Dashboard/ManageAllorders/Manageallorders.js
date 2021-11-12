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
  
function Manageallorders() {
     const [allordersdata,setAllordersdata]=useState([]);
     const {user}=useAuth();
  

     useEffect(()=>{

        axios.get(`https://desolate-atoll-64898.herokuapp.com/allorders`).then(res=>setAllordersdata(res.data)).catch(err=>console.log(err))

     },[allordersdata])

    
       
    const changestatus=(id)=>{
        const confirmchange=window.confirm("Are you sure you want to change status?");
        if(confirmchange){

            axios.put(`https://desolate-atoll-64898.herokuapp.com/changestatus/${id}`).then(res=>{
                
                toast.success(res.data)
             }).catch(err=>console.log(err))
            }
    }
    return (
        <Box>
          <title>Manage orders</title>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                 <Typography variant="h4"sx={{mb:2}}>Manage all orders</Typography>
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
                                 allordersdata.map((product)=>{
                                   return(
                                        <StyledTableRow key={product._id}>
                                          <StyledTableCell component="th" scope="row">{product.email}</StyledTableCell>
                                          <StyledTableCell align="right">{product.productdetails.name}</StyledTableCell>
                                          <StyledTableCell align="right">{product.productdetails.price}</StyledTableCell>
                                          <StyledTableCell align="right">{product.status}</StyledTableCell>
                                          <StyledTableCell align="center">
                                              {product.status==="Pending"?
                                                <Button onClick={()=>changestatus(product._id)} variant="contained">Change status</Button>:<Button disabled variant="contained">Shipped</Button>
                                               } 
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

export default Manageallorders;

