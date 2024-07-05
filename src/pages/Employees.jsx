import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Typography, Input, Button, TextField, Fab, Dialog, DialogTitle, DialogContent, Checkbox, DialogActions, Alert } from "@mui/material";
import { createHttpLink, gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ChevronRight } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';


          // query getProjects {
          //   getProjects {
          //     projectName
          //     projectId
          //     category
          //     projectStatus
          //     phases {
          //       phaseName
          //       phaseCheckLists {
          //         isChecked
          //         comment1
          //         comment2
          //       }
          //     }
          //   }
          // }



const Employees = () => {
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
              setTimeout(() => setAlert(false), 2000)
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
      <Box sx={{
        margin: 1
      }}>
      <Box marginBottom={2}>
      <Paper sx={{
        padding: 2,
      }}>
        <Box display='flex' justifyContent='space-between'>
          <Box display='flex' alignItems='center'>
            <Typography fontWeight={5000} variant="h6">
              Employee List
            </Typography>
          </Box>
          {isAdmin &&
            <Box left='auto' position='relative'>
              <Fab color="primary" size="small" onClick={() => setOpen(true)}>
                <AddIcon />
              </Fab>
            </Box>
          }
        </Box>
      </Paper>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell sx={{
                width: '20%'
              }}>Name</TableCell>
              <TableCell>email</TableCell>
              <TableCell>Authorization Level</TableCell>
              <TableCell>Login status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{employee.username}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.admin ? 'Admin' : 'General'}</TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <ChevronRight />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      <Dialog open={open} fullWidth>
        <DialogTitle>
          Add New Employee
        </DialogTitle>
        <DialogContent sx={{
          paddingLeft: 10,
          paddingRight: 10
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: 'column'
          }}>
            {alert && <Alert severity={creationSuccess ? "success" : "info"} onClose={() => setAlert(false)}></Alert> }
            <TextField placeholder="Username" id="username" label='Username' variant="standard" sx={{margin: 1}}></TextField>
            <TextField placeholder="Email ID" id="email" label='Email Id' variant="standard" sx={{margin: 1}}></TextField>
            <TextField placeholder="Password" id="password" type='password' label='Password' variant="standard" sx={{margin: 1}}></TextField>
          </Box>
          <Box sx={{margin: 1, display: "flex", alignItems: 'center'}}>
            <Typography>Administrator - </Typography>
            <input type="checkbox" id="admin" style={{width: '15px', height: '15px'}}/>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={handleAddEmployee}>Add</Button>
          <Button color="warning" onClick={handleClear}>Clear</Button>
          <Button color="error" onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  ) 
}

export default Employees