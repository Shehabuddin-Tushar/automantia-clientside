import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React,{useState,useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
function CheckoutForm(props) {
    const stripe = useStripe();
    const elements = useElements();
    const [myerror,setMyerror]=useState();
    const [mysuccess,setMysuccess]=useState();
    const [processing,setProcessing]=useState(false);

    const {name,price}=props.myorder;
    const {_id:id}=props.mydetail;

    console.log(typeof(price))
    const {username,email}=props.mydetail;
    const [clientsecret,setClientsecret]=useState("");

    useEffect(()=>{

      fetch("https://desolate-atoll-64898.herokuapp.com/create-payment-intent",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({price})
      }).then(res=>res.json()).then(data=>setClientsecret(data.clientSecret))
    },[price])
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }

      if(!stripe || !elements){
        return;
      }

      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }
      setProcessing(true);
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        console.log('[error]', error);
        setMyerror(error.message);

      } else {
        setMyerror("");
        console.log('[PaymentMethod]', paymentMethod);
      }

      //payment intent

      const {paymentIntent, error : intenterror} = await stripe.confirmCardPayment(
         clientsecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: username,
              email:email
            },
          },
        },
      );

      if(intenterror){
        setMysuccess("");
        setMyerror(intenterror.message);
        setProcessing(false)
      }else{
        setMyerror("");
        setMysuccess("your payment process successfully completed")
        console.log(paymentIntent);
        setProcessing(false);
        //save payment data in database
        const payment={
            amount:paymentIntent.amount,
            transiction:paymentIntent.client_secret.split("_secret")[0],
            created:paymentIntent.created,
            lastfour:paymentMethod.card.last4

        }
        console.log(payment);
        const url=`http://localhost:5000/orders/${id}`;
        console.log(url)
        fetch(url,{
          method:"PUT",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(payment)
        }).then(res=>res.json()).then(data=>console.log(data))
      }
    };
 
    return (
        <Box>
           <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <form onSubmit={handleSubmit}>
            
                    <p style={{color:"red"}}>{myerror}</p>
                    <p style={{color:"green"}}>{mysuccess}</p>
                    <br/>
                    <CardElement />
                    <p>{name}</p>
                    <br/>
                    
                    {processing?<CircularProgress/>:<button type="submit" disabled={!stripe || !elements || mysuccess}>
                       Pay
                    </button>}
                    
                </form>
                </Grid>
            </Grid>   
        </Box>
        
    )
}

export default CheckoutForm
