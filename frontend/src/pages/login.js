import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,InputGroup,InputRightElement,  useToast, Modal,ModalFooter, 
    ModalBody,ModalContent,ModalOverlay,ModalCloseButton,ModalHeader, useDisclosure
  } from '@chakra-ui/react'
  import  React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2'

import axios from 'axios';



export default function Login(){

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef();
    const finalRef = React.useRef();

        const [show, setShow] = React.useState(false);
        const handleClick = () => setShow(!show);

           ///login 
        const [emailorusername, setEmail] = useState("")
        const [password, setPassword] = useState("")

        const requestLogin = async () =>{
            const isi = {emailorusername, password};
    
            if (emailorusername === '' || password === '') {
                alert('data belum disi')
            }else{
                try {
                    await axios.post('http://localhost:8000/auth/login', isi).then((res) => {
                        localStorage.setItem("token", res.data.token);
                        console.log(res.data);    
                    Swal.fire(
                            'Good job!',
                            'Berhasil login',
                            'success'
                        ).then(function(){
                            window.location = "/home"
                        })
                        
                    })
                    
                } catch (error) {
                    console.log(error);
                }
            }
        }

        //send email for forgotpassword

       const [email, setSendemail] = useState(""); 
       const toast = useToast();

        const defaultToastProps = {
            position: "top-right",
            duration: 5000,
            isClosable: true,
           };
       const requestSendEmail = async () =>{
        const data = { email}

        if (email === '') {
          alert('Email belum disi')
        }else{
          try {
            await axios.post('http://localhost:8000/auth/forgotpassword', data).then((res) => {
                    console.log(res);
                    toast({
                      title: "Update Password.",
                      description: "We send a link to your email. please check your inbox",
                      status: "success",
                      ...defaultToastProps,
                    });
                    
                })
          } catch (error) {
            console.log(error);
          }
        }
       }

    return(
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Stack spacing="6">
            {/* <Logo /> */}
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button variant="link" colorScheme="blue" onClick={()=>{window.location="/register"}}>
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={{ base: 'transparent', sm: 'bg-surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                
                  <FormLabel htmlFor="email">Email / Username</FormLabel>
                  <Input id="email" type="email" value={emailorusername} onChange={(e) => setEmail(e.target.value)}/>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                    <Input type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                    </InputGroup>

                </FormControl>
                {/* <PasswordField /> */}
              </Stack>
              <HStack justify="space-between">
                {/* <Checkbox defaultChecked>Remember me</Checkbox> */}
                <Button onClick={onOpen} variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button variant="primary" bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={requestLogin}>Sign in</Button>
               
              </Stack>
            </Stack>
            <FormControl>
            <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Send email for update password</ModalHeader>
                        <ModalCloseButton />

                        <ModalBody pb={6}>
                            <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input id='email' type='email'
                             value={email} onChange={(e) =>{setSendemail(e.target.value)}}
                            ref={initialRef} placeholder="insert your email" />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button variantColor="blue" mr={3} onClick={requestSendEmail} >
                            Send
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
            </FormControl>
          </Box>
        </Stack>
      </Container>
      
      
    )
}