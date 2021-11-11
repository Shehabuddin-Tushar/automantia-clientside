import { Box } from '@mui/system'
import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Header/Navbar'
import Products from '../Home/Products/Products'

function Ourproducts() {
    return (
        <Box className="ourproducts-wrapper" sx={{marginTop:"100px"}}>
            <Navbar/>
            <Products item={0}/> 
            <Footer/>
        </Box>
    )
}

export default Ourproducts
