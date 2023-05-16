import React from "react";
import {  Center, Stack, useColorModeValue, Heading, FormControl, FormLabel, Input, 
     InputRightElement, Button, InputGroup, Text, Link, Box, Grid,  useToast, } from "@chakra-ui/react";

import { useState } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import axios from "axios";
export default function Register(){

        const [show, setShow] = React.useState(false);
        const handleClick = () => setShow(!show);

        const defaultToastProps = {
          position: "top-right",
          duration: 5000,
          isClosable: true,
         };

        const [username, setName] = useState("");
        const [password, setPass] = useState("");
        const [confim_pass, setConfim] = useState("");
        const [email, setEmail] = useState("");
        
        const toast = useToast();

        const postRequestHandler = async () => {
          const data = {username, password, confim_pass, email};

          if (username === "" || password === "" || email === "" || confim_pass==="") {
              alert('ada data yang masih kosong')
          }else{
            try {
             await axios.post('http://localhost:8000/auth/register', data).then((res) => {
              console.log(res);
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                ...defaultToastProps,
              });
              setName("");
              setPass("");
              setEmail("");
              setConfim("");
            }).then(()=>{ window.location = "/"})
            } catch (err) {
              console.log(err)
 
            }
            
          }
      
        }
        
    return(
        <Box textAlign="center" fontSize="xl">
        <Grid minH="50vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Center py={6}>
            <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            height={{ sm: '476px', md: '25rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}>     
                <FormControl>
                <Stack spacing={3}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
               <Center>User Registration </Center> 
                </Heading>
                    <InputGroup>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" value={username} onChange={(e) => setName(e.target.value)} placeholder='Enter username'/>
                    </InputGroup>

                    <InputGroup>
                    <FormLabel pr={'1'}>Password</FormLabel>
                    <Input value={password} onChange={(e) => setPass(e.target.value)}  pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                    </InputGroup>

                    <InputGroup>
                    <FormLabel pr={'1'}>Confirmation Password</FormLabel>
                    <Input value={confim_pass} onChange={(e) => setConfim(e.target.value)}  pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                    </InputGroup>

                    <InputGroup>
                    <FormLabel pr={'8'}>Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="your-email@example.com"/>
                    </InputGroup>

                    
                </Stack>
                <Stack spacing={10} pt={5}>
              <Button onClick={postRequestHandler}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link onClick={()=>{window.location="/"}} color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
                </FormControl>
            </Stack>
        </Center>
        </Grid>
        </Box>
       
    )
    

}
