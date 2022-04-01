import React ,{useEffect}  from 'react';
import Storage from './abi/Strorage.json'  
import {Flex, Box,Button,Text,Input, Heading} from "@chakra-ui/react"
import {ethers} from  'ethers'
import ipfs from '../utils/ipfs'
 import { Grid,Center,
  FormControl,Spacer,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import  {useState ,useContext,createContext} from 'react';
const dat =['Secure','Decentralized','Vote now']
export default function Content(){

  


  const CaptureImage =(event)=>{

    
    const file = event.target.files[0]; 
    setImage(file);
    console.log(file)
    setSelectedfile(file);
    const reader = new window.FileReader();
  
    reader.readAsArrayBuffer(file)
    reader.onloadend=(result)=>{
    console.log(Buffer(reader.result))
    setImage(Buffer(reader.result))
     }
    

  }

  const imageUpload = (event)=>{
    console.log("uploading file")
  event.preventDefault();

    ipfs.files.add(image,function(res,error){
      if(error){
        console.log(error)
      }
    console.log(res)
  })
  
  }


const [selectedfile,setSelectedfile] =useState()
const [preview ,setPreview] = useState()
const [image,setImage] = useState(null)
const [data,setdata] = useState("0")
  const setMessage =async ()=>{
    if(typeof window.ethereum!=='undefined'){
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner();
      const contract = new ethers.Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3",Storage.abi,signer)
     const transaction = await contract.set(data) 

     await transaction.wait()
     message()
    }
    else{
      alert("error")
    }

  }
  const message = async()=>{
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      
      const contract = new ethers.Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3",Storage.abi,provider)
      console.log(Storage.abi)
      try{
         const data = await contract.get();
         setdata(data)
     } 
     catch{
         const data = "new error"
         setdata(data)
     }
    } }

    return(
      <>
        <Flex>
        {dat.map((item)=>{ 
           return <Box boxShadow='base' p='7' m='5' rounded='md' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'><Heading as='h2' size='sm' md>{item} </Heading> </Box>
        }) }
         
        <p>{data}</p>
        </Flex>  
        <Flex >
        <FormControl>
        <Box w='100px' border='1px' borderColor='blackAlpha.50'><Button onClick={message} fontSize='sm'>Get</Button>
        <Input type="text" value={data} onChange={e=>setdata(e.target.value)}/>
        <Button onClick={setMessage} fontSize='sm'>Set</Button>
        </Box>
        </FormControl>
        </Flex>
        </>) 
}
