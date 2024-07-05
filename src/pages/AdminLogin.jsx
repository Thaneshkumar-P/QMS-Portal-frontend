import React from 'react';
import { 
  Container, 
  Paper, 
  Button, 
  TextField, 
  Box, 
} from '@mui/material';
import axios from 'axios'
import { gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import '../Login.sass'


const AdminLogin = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
  
  function handleLogin() {
    try {
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      client
        .mutate({
          mutation: gql`
            mutation Login($username: String!, $password: String!) {
              Login(username: $username, password: $password) {
                message
                status
                token
              }
            }
          `,
          variables: { username, password }
        })
        .then( async (result) => {
          try{
            const response = await axios.post(
              'http://localhost:4000/set-cookie',
              { "token": result.data.Login.token },
              { withCredentials: true }
            );
            console.log(response)
          }
          catch{

          }
        })
        .catch((error) => console.error('Error:', error.message));
    } catch (error) {
      console.error('Error:', error.message);
    }
  } 
    


  return (
    <Container
      // maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensure the container fills at least the entire viewport
      }}
    >
        <Paper elevation={1} sx={{ padding: 2 }}>
            <Button variant="outlined" fullWidth disableTouchRipple>
              Administrator
            </Button>
          <Box
            display='flex'
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingTop={2}
            paddingBottom={2}
          >
            <TextField
              label="Email"
              id="username"
              size="small"
              sx={{ paddingBottom: '10px'}}
              fullWidth
            />
            <TextField 
              size='small'
              label="Password"
              id='password'
              fullWidth
            />
          </Box>
          <Button variant="contained" onClick={handleLogin} fullWidth>
            Login
          </Button>
        </Paper>
    </Container>
  );
};

export default AdminLogin;
