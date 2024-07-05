import React from 'react';
import { 
  Container, 
  Paper, 
  Button, 
  TextField, 
  Box, 
  Divider,
  Typography,
  Grid
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setAdminStatus } from '../store/authSlice.js';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import axios from 'axios'
import { gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import '../Login.sass'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();


  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache: new InMemoryCache(),
  });
  
  function handleLogin() {
    try {
      let email = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      console.log(email)
      client
        .mutate({
          mutation: gql`
            mutation Login($email: String!, $password: String!) {
              Login(email: $email, password: $password) {
                message
                status
                token
                admin
              }
            }
          `,
          variables: { email, password }
        })
        .then( async (result) => {
          try{
            const response = await axios.post(
              'http://localhost:4000/set-cookie',
              { "token": result.data.Login.token },
              { withCredentials: true }
            );
            console.log(response)
            dispatch(setAdminStatus(result.data.Login.admin));
            navigate('/')
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
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <img src="" alt="" />
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={1} sx={{ padding: 2 }}>
            <Button variant="outlined" fullWidth startIcon={<CorporateFareIcon />} sx={{
              marginBottom: 2
            }} onClick={() => navigate('/admin')}>
              Administrator
            </Button>
            <Divider>
              <Typography>Or</Typography>
            </Divider>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
