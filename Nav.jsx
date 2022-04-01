import { Box ,Text,Spacer,Flex,Grid,Menu,MenuButton,MenuList,MenuItem,Button} from '@chakra-ui/react';
import React, {useState,useContext} from 'react';

import MetamaskAuth from '../utils/Metamask';





const nav =['Polling','Admin','Connect','Contact']


function Nav() {
  
 const{Auth,account ,setAccount} = MetamaskAuth()
 
  
  return (
  
              
   
  <Flex >
    <Menu >
    <MenuButton as={Button}  colorScheme='pink'  m='1' >
      Actions
    </MenuButton>
    <MenuList>
    {nav.map((item,index)=>{
        return <MenuItem>{item}</MenuItem>
      })}
      
   
    </MenuList>
  </Menu>
  <Spacer />
    <Box boxShadow='base' p='2' m='1' rounded='md' bg='white'>
    {account==null?<Button onClick={Auth} fontSize='sm'>Connect</Button>: <Button  fontSize='sm'>{account}</Button>}
    </Box>
  </Flex> 

      
    
    
   
  );
}

export default Nav ;
