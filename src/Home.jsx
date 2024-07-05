import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import { createHttpLink, gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/userSlice";
import { setProject } from "./store/projectSlice";

const Home = () => {

  const dispatch = useDispatch()

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
    getProjects()
  },[])

  function getEmployees() { 
    try{
      client
      .query({
        query: gql`
          query getUserDetails {
            getUserDetails {
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
          dispatch(setUser({ 
            username: result.data.getUserDetails.username,
            email: result.data.getUserDetails.email,
            admin: result.data.getUserDetails.admin,
          }))
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

  function getProjects() { 
    try{
      client
      .query({
        query: gql`
          query getProjects {
            getProjects {
              projectName
              projectId
              projectStatus
              category
              phases {
                phaseName
                phaseCheckLists {
                  comment1
                  comment2
                  checkListName
                  isChecked
                }
              }
            }
          }
        `
      })        
      .then( async (result) => {
        try{
          console.log(result)
          dispatch(setProject({ 
            projects: result.data.getProjects
          }))
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

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <div style={{
        width: '100%',
        height: '100%'
      }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Home;