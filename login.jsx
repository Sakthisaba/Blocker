import React ,{useEffect}  from 'react';
import Storage from './abi/Strorage.json'  
import {Route,BrowserRouter ,Routes,Link } from 'react-router-dom';
import User from '../components/user/index'
import Admin from '../components/admin/index'
 import { Flex,
    Box,
    Button,
    Text,
    Input,
    Heading,
  Grid,Center,
  FormControl,Spacer,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Switch,onOpen,
  setOverlay,
  Modal,
  isOpen,
  ModalOverlay,
  overlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/react'


export default function login(){

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
return(

<>
      <Button
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
       Login
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>E-VOTING </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button>User</Button>
            <Button>Admin</Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  
)
}