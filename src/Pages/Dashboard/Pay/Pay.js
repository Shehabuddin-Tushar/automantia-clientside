import { Box } from '@mui/system'
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './Pay.css'
function Pay() {
    const [myorder,setMyorder]=useState({});
    const [mydetail,setMydetail]=useState({});
    const {id}=useParams();
    console.log(id)

    useEffect(()=>{
       
        fetch(`https://desolate-atoll-64898.herokuapp.com/myorderByid/${id}`).then(res=>res.json()).then(data=>{
          setMydetail(data)
          setMyorder(data.productdetails);
         
         

        });

    },[id]);

    const myproductname=myorder.name
    const myproductprice=myorder.price
    const stripePromise = loadStripe('pk_test_51Jw9OEBh107PE7HCu5vw3WcMDMtlsrImA5bZQoFt2JWh2mH9L9gIktkIrBPawAAOuL22PRwUBqquQksOpgkTp3Ss00mpYRA2Ng');
    return (
        <Box className="pay-wrapper">
           <title>Payment</title> 
          <h1>Your car Name:{myproductname}</h1>
           <h1>Car price: ${myproductprice}</h1>
           <h1>pay: ${myproductprice}</h1>
           
           {myproductprice && <Elements stripe={stripePromise}>
                <CheckoutForm myorder={myorder} mydetail={mydetail} />
           </Elements>}
        </Box>
      
    )
}

export default Pay
