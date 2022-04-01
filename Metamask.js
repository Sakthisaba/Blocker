
import React, {useState ,useContext,createContext} from 'react';

import {ethers} from  'ethers'



export default  function MetamaskAuth() {
    const [account ,setAccount]=useState(null)


    
        async function Auth(){

            if(typeof window.ethereum !== "undefined"){

        const  provider =  new ethers.providers.Web3Provider(window.ethereum)
     
     
         await provider.send("eth_requestAccounts", [])
      
        const network  = await provider.listAccounts();
        
        setAccount((prev)=>{
           return network[0]} )
    }}
   
       return{Auth,account ,setAccount}
       
      
     
     
}

