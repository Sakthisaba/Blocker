import React  from 'react'
import firebase from '../utils/firebase'
import { useState } from 'react'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Vote from '../components/Vote'
import { Grid,Center,Button,
  FormControl,Spacer,
  FormLabel,Box,
  FormErrorMessage,
  FormHelperText,
  Flex,Input,
  Heading,
} from '@chakra-ui/react'
import {useHistory }from 'react-router-dom'
import supabase from './supabase'
import {Route,BrowserRouter ,Routes,Link } from 'react-router-dom';


export default function auth() {
const [id,setId] = useState(null);
const [number,setNum] =useState('0')
 
  async function handleID(e){
    e.preventDefault()
    
   
   console.log(id)
   const  {data} = await supabase.from('blocks').select().eq('id',id)
  
    const num = await data[0].ph_no;

      console.log(num)
      
     
   handleClick(num)
  }
 

   const handleClick=(num)=>{
    console.log("OTP")
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
   
    console.log("passed captcha")
    
    firebase.auth().signInWithPhoneNumber(num,recaptcha ).then( function(e) {
      var code = window.prompt('Enter the otp', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log(result.user);
            
           
            
        }).catch(function (error) {
            console.error( error);
            
        });

    })
    .catch(function (error) {
        console.error( error);

    });
  }
  
    return (
      <div>
       
          <Box>
        <Heading>Login Page</Heading>
        
        <FormControl w='300px' onSubmit={e=>handleID(e)}>
       
       <Input id='number' onChange={e=>setId(e.target.value)} placeholder='Adhaar number'/>
       <Button type='submit' value={id} onClick={e=>handleID(e)}>Submit</Button>
       </FormControl></Box>
       <div id="recaptcha"></div>
       
       
      </div>
    )
  
}

