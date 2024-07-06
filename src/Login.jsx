// src/Login.js
import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Image,
    Input,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';
import toast from 'react-hot-toast';

const Login = ({ setlogin, username, roomid, setusername, setroomid }) => {
    const handleLogin = () => {
        setlogin(false)
        toast.success("User Joined")
    };

    return (

        <>
        <div className='logo'>

            <Image src="xcode.png" boxSize="100px" alt="" srcset="" />
         
            <Heading>X-Code Editor</Heading>
        </div>

            <Box maxW="sm" p="6" borderWidth="1px" borderRadius="lg" boxShadow="md">


                <Stack spacing="4">
                    <FormControl>
                        <FormLabel>Room Id</FormLabel>
                        <Input type="email" value={roomid} onChange={(e) => setroomid(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input type="text" value={username} onChange={(e) => setusername(e.target.value)} />
                    </FormControl>
                    <Button colorScheme="blue" onClick={handleLogin}>
                        Create
                    </Button>


                </Stack>
            </Box>
        </>
    );
};

export default Login;
