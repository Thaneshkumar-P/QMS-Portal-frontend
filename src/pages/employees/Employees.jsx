import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Typography, Input, Button, TextField, Fab, Dialog, DialogTitle, DialogContent, Checkbox, DialogActions, Alert, Switch } from "@mui/material";
import { createHttpLink, gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ChevronRight, Search } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Employees = () => {

  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [employees, setEmployees] = useState([])
  const [alert, setAlert] = useState(false)
  const [creationSuccess, setCreationSuccess] = useState(false)
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const link = createHttpLink({
    uri: process.env.REACT_APP_API_URL,
    credentials: 'include'
  })

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });


  useEffect(() => {
    
    getEmployees()
  },[])

  function getEmployees() { 
    try{
      client
      .query({
        query: gql`
          query getUsers {
            getUsers {
              username
              email
              admin
            }
          }
        `
      })        
      .then( async (result) => {
        try{
          console.log(result)
          setEmployees(result.data.getUsers)
        }
        catch(error){
          console.log(error)
        }
      })
      .catch((error) => console.error('Error:', error.message));
    }
    catch(error){
      console.log(error)
    }
  }

  const handleClear = () => {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('email').value = '';
    document.getElementById('admin').checked = false
  }

  const handleAddEmployee = () => {
    if (!isAdmin) return
    try {
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      let email = document.getElementById('email').value;
      let admin = document.getElementById('admin').checked
      console.log(username, password, email, admin)
      client
        .mutate({
          mutation: gql`
            mutation Register($username: String!, $password: String!, $email: String!, $admin: Boolean!) {
              Register(username: $username, password: $password, email: $email, admin: $admin) {
                message
                status
                username
                email
                password
              }
            }
          `,
          variables: { username, password, email, admin },
        })
        .then( async (result) => {
          setAlert(false)
          if(result.data.Register.status){
            try{
              setAlert(true)
              setCreationSuccess(true)
              console.log(result)
              getEmployees()
              handleClear()
              setTimeout(() => {
                document.getElementsByClassName('MuiAlert-message')[0].innerHTML = `User created successfully`
              }, 1)
              setTimeout(() => {
                setAlert(false)
                setCreationSuccess(false)
              }, 2000)
            }
            catch{

            }
          }
          else{
            setAlert(true)
            console.log(result.data)
            // setTimeout(() => {
            //   if(result.data.Register.username)
            //     document.getElementsByClassName('MuiAlert-message')[0].innerHTML = `${result.data.Register.username}`
            //   else if(result.data.Register.email)
            //     document.getElementsByClassName('MuiAlert-message')[0].innerHTML = `${result.data.Register.email}`
            //   else if(result.data.Register.password)
            //     document.getElementsByClassName('MuiAlert-message')[0].innerHTML = `${result.data.Register.password}`
            // }, 1)
            setTimeout(() => {
              const errorMessage = result.data.Register;
              document.getElementsByClassName('MuiAlert-message')[0].innerHTML = errorMessage.username || errorMessage.email || errorMessage.password;
            }, 1);
          }
        })
        .catch((error) => console.log('Errors:', error.message));
    } catch (error) {
      console.log('Error:', error.message);
    }
  }


  return (
    <>
      <Box>
        <Box>
          <Box padding={2} bgcolor='white' display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
            <Box width='100%'>
              <Typography variant="h5">Employees</Typography>
            </Box>
            <Box width='25%'>
              <div className="relative flex flex-1 flex-shrink-0" id="searchEmployee">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="searchEmployee"
                  placeholder='Search Employee'
                />
                {/* <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
              </div>
            </Box>
            <Box>
              <Button variant="contained" startIcon={<Search />} size="small">Search</Button>
            </Box>
            <Box>
              <Button variant="contained" size="small" onClick={() => navigate('/employees/new')}>New</Button>
            </Box>
          </Box>
          <Box sx={{ padding: 1, overflow: 'hidden' }}>
          <table className="hidden w-full rounded-md text-gray-900 md:block overflow-y-scroll h-[80vh]" style={{ scrollbarWidth: 1 }}>
            <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-4 py-5 font-medium w-[25%]">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium w-[20%]">
                  Role
                </th>
                <th scope="col" className="px-3 py-5 font-medium w-[25%]">
                  Login Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium w-[25%]">
                  Team
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-900">
              <tr className="group cursor-pointer">
                <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                  <div className="flex items-center gap-3">
                    {/* <img
                      src={customer.image_url}
                      className="rounded-full"
                      alt={`${customer.name}'s profile`}
                      width={28}
                      height={28}
                    /> */}
                    <p>Thanesh Kumar</p>
                  </div>
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                  Thanesh308@gmail.com
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                  Developer
                </td>
                <td className=" bg-white px-4 py-5 text-sm">
                  Logged In
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                  Team Name
                </td>
              </tr>
            </tbody>
          </table>
          </Box>
        </Box>
      </Box>
    </>
  ) 
}

export default Employees