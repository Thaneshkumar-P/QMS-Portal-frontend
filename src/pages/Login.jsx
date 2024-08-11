import React, { useState } from 'react';
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
import Cookies from 'js-cookie'
import eghai from '../assets/eghai-250x150-logo-2.png'
import { InfoOutlined, InfoRounded } from '@mui/icons-material';

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [vMsg, setVMsg] = useState('')


  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache: new InMemoryCache(),
  });
  
  function handleLogin() {
    let loader = document.getElementById('loader')
    let text = document.getElementById('text')
    let sButton = document.getElementById('submitButton')
    let validation = document.getElementById('validation')
    try {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      sButton.classList.toggle('w-full')
      sButton.classList.remove('rounded')
      sButton.classList.add('rounded-full')
      text.classList.toggle('hidden')
      loader.classList.toggle('hidden')

      if(!email){
        document.getElementById('email').classList.remove('border-gray-200')
        document.getElementById('email').classList.add('border-red-500')
        setVMsg('Please enter the usename')
        validation.classList.remove('hidden')
        throw 'Failed'
      }

      if(!password){
        document.getElementById('password').classList.remove('border-gray-200')
        document.getElementById('password').classList.add('border-red-500')
        setVMsg('Please enter the password')
        validation.classList.remove('hidden')
        throw 'Failed'
      }

      validation.classList.add('hidden')
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
            Cookies.set('token', result.data.Login.token)
            dispatch(setAdminStatus(result.data.Login.admin));
            navigate('/')
          }
          catch{

          }
        })
        .catch((error) => console.error('Error:', error.message));
    } catch (error) {
      if(error === 'Failed') {     
        setTimeout(() => {
          sButton.classList.toggle('w-full')
          sButton.classList.add('rounded')
          sButton.classList.remove('rounded-full')
          text.classList.toggle('hidden')
          loader.classList.toggle('hidden')
        }, 1000)
      }
      else {
        setVMsg('Invalid username or password')
        validation.classList.remove('hidden')
      }
      console.error('Error:', error.message);
    }
  } 
    


  return (
    <div className='flex justify-center items-center h-[100vh] md:ms-[40px] md:me-[40px] md:pl-[20px] md:pr-[20px] ms-[20px] me-[20px] '>
      <div className='flex flex-row gap-2 w-full border bg-white rounded-xl'>
        <div className='flex w-[0%] grow-0 md:w-[75%] hidden md:block'></div>
        <div className='flex w-[100%] justify-center rounded-xl items-center border border-color-gray grow-0 md:w-[35%] h-[80vh]'>
          <div className='p-5 bg-white w-full'>
            <div>
              <div className='flex justify-center'>
                <img src={eghai} alt='eghai' width={125} />
              </div>
              <div className='flex justify-center'>
                <h4 className='font-medium text-xl'>Sign In</h4>
              </div>
            </div>
            <div className='hidden flex justify-center p-2 border-2 border-blue-200 rounded gap-2 bg-blue-100 mb-2 mt-2' id='validation'>
              <InfoOutlined />
              <p>{vMsg}</p>
            </div>
            <div className='flex justify-center items-center pt-2 flex-col pb-2'>
              <div className="mb-2 w-full">
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2 w-full">
                <label htmlFor="password" className="mb-2 block text-sm font-medium">
                  Password
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <button type="button" onClick={handleLogin} id='submitButton' className='w-full bg-blue-600 rounded p-1.5 text-white flex justify-center items-center'>
                <div id='loader' className='hidden flex'>
                  <svg aria-hidden="true" role="status" class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                  </svg>
                </div>
                <div id='text'>Sign In</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
