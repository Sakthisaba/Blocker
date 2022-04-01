import React,{useState,useEffect}  from 'react'
import {Text} from "@chakra-ui/react"



function Main(){

   const  [num,setNum]=useState(0);

   useEffect(()=>{
       setInterval(()=>{
           setNum((prev)=>{
             return prev<3?prev+1:prev}
               )
        
       },500)
   },[])

return(
    <Text className='glitch' 
    bgGradient='linear(to-l, #7928CA, #FF0080)'
    bgClip='text'
    fontSize='6xl'
    fontWeight='extrabold'>E-Voting using WEB{num}.0</Text>
)
}

export default Main;