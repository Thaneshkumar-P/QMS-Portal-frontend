import { Button, Avatar, IconButton, Drawer } from "@mui/material"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Folder, Logout, MenuOutlined, People } from '@mui/icons-material'
import Paper from "@mui/material/Paper";
import { useLocation, useNavigate } from "react-router-dom";
import '../Sidebar.sass'
import Cookies from 'js-cookie'
import { useState, useEffect } from "react";


const Sidebar = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const determineSelected = (path) => {
    switch (path) {
      case '/projects':
        return 1;
      case '/employees':
        return 2;
      default:
        return 0;
    }
  };


  const [open, setOpen] = useState(true)
  const [select, setSelected] = useState(() => determineSelected(location.pathname));

  

  useEffect(() => {
    setSelected(determineSelected(location.pathname));
  }, [location.pathname]);
  

    function handleSignOut() {
      Cookies.remove('token')
      setTimeout(() => navigate('/projects'), 1)
      console.log(1)
    }

    const gotTo = (path, selected) => {
      navigate(path)
      setSelected(selected)
    }
    
    const toggleDrawer = () => {
      setOpen(!open);
    };

    return (
        <>
            <Drawer
              variant="permanent"
              open={open}
              PaperProps={{
                  sx: {
                      width: open ? 240 : 64,
                      transition: 'width 0.3s',
                      overflowX: 'hidden',
                      position: 'relative',
                      background: 'transparent'
                  }
              }}
            >
            <Paper elevation={4} sx={{
                margin: 1,
                minHeight: window.screen.availHeight - 105,
                maxHeight: window.screen.availHeight - 105
            }}>
            <Box sx={{ padding: open ? 4 : 1.25, paddingTop: 5 }}>
              <Stack spacing={2}>
                <IconButton onClick={toggleDrawer} sx={{ position: 'absolute', top: 10, left: 10 }}>
                 <MenuOutlined />
                </IconButton>
                { open ? <Button variant="contained" size="large" startIcon={
                    <Avatar> 
                        UN
                    </Avatar>
                }
                sx={{
                    backgroundColor: '#d9e7ff97',
                    color: '#000',
                    boxShadow: 0,
                    ":hover": {
                        backgroundColor: '#d9e7ff',
                        boxShadow: "none"
                    },
                    margin: -1
                }}
                >
                  Username
                </Button>
                :
                <Box sx={{ paddingTop: 2}}>
                  <Avatar sx={{ marginLeft: '-6px !Important' }}> 
                    UN
                  </Avatar>
                </Box>
                }
                <Button color="primary" className="sidebar-button" startIcon={<Folder />} sx={{
                    justifyContent: "flex-start",
                    minWidth: 0,
                    backgroundColor: select === 1 ? '#d9e7ff' : 'transparent',
                    ":hover": {
                        backgroundColor: '#d9e7ff',
                        boxShadow: "none"

                    }
                }}
                onClick={() => gotTo('/projects', 1)}
                >{open && 'Projects'}</Button>
                <Button color="primary" className="sidebar-button" startIcon={<People />} sx={{
                    justifyContent: "flex-start",
                    minWidth: 0,
                    backgroundColor: select === 2 ? '#d9e7ff' : 'transparent',
                    ":hover": {
                        backgroundColor: '#d9e7ff',
                        boxShadow: "none"
                    },
                }}
                onClick={() => gotTo('/employees', 2)}
                >{open && 'Employees'}</Button>
                <Button color="primary" className="sidebar-button" startIcon={<Logout />} sx={{
                    justifyContent: "flex-start",
                    minWidth: 0,
                    ":hover": {
                        backgroundColor: '#d9e7ff',
                        boxShadow: "none"
                    },
                }}
                onClick={handleSignOut}
                >{open && 'Sign Out'}</Button>                 
              </Stack>
            </Box>
            </Paper>
            </Drawer>
        </>
    )
}

export default Sidebar


// import { useState } from 'react';
// import { Button, Avatar, Box, Stack, Paper, IconButton, Drawer } from "@mui/material";
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
// import { Logout, People, Menu as MenuIcon } from '@mui/icons-material';
// import { useNavigate } from "react-router-dom";
// import Cookies from 'js-cookie';
// import '../Sidebar.sass';

// const Sidebar = () => {
//     const navigate = useNavigate();
//     const [open, setOpen] = useState(true);

//     const toggleDrawer = () => {
//         setOpen(!open);
//     };

//     const handleSignOut = () => {
//         Cookies.remove('token');
//         setTimeout(() => navigate('/projects'), 1);
//         console.log(1);
//     };

//     return (
//         <>
//             <IconButton onClick={() => toggleDrawer} sx={{ position: 'absolute', top: 10, left: 10 }}>
//                 <MenuIcon />
//             </IconButton>
//             <Drawer
//                 variant="permanent"
//                 open={open}
//                 PaperProps={{
//                     sx: {
//                         width: open ? 240 : 64,
//                         transition: 'width 0.3s',
//                         overflowX: 'hidden'
//                     }
//                 }}
//             >
//                 <Paper elevation={4} sx={{
//                     margin: 1,
//                     minHeight: window.screen.availHeight - 105,
//                     maxHeight: window.screen.availHeight - 105,
//                     width: '100%'
//                 }}>
//                     <Box sx={{ padding: 5 }}>
//                         <Stack spacing={2}>
//                             <Button variant="contained" size="large" startIcon={
//                                 open && <Avatar>UN</Avatar>
//                             }
//                                 sx={{
//                                     backgroundColor: '#d9e7ff97',
//                                     color: '#000',
//                                     boxShadow: 0,
//                                     ":hover": {
//                                         backgroundColor: '#d9e7ff',
//                                         boxShadow: "none"
//                                     }
//                                 }}
//                             >
//                                 {open && "Username"}
//                             </Button>
//                             <Button color="primary" className="sidebar-button" startIcon={<People />} sx={{
//                                 justifyContent: "flex-start",
//                                 ":hover": {
//                                     backgroundColor: '#d9e7ff',
//                                     boxShadow: "none"
//                                 },
//                             }}
//                                 onClick={() => navigate('/employees')}
//                             >
//                                 {open && "Employees"}
//                             </Button>
//                             <Button color="primary" className="sidebar-button" startIcon={<Logout />} sx={{
//                                 justifyContent: "flex-start",
//                                 ":hover": {
//                                     backgroundColor: '#d9e7ff',
//                                     boxShadow: "none"
//                                 },
//                             }}
//                                 onClick={handleSignOut}
//                             >
//                                 {open && "Sign Out"}
//                             </Button>
//                         </Stack>
//                     </Box>
//                 </Paper>
//             </Drawer>
//         </>
//     );
// };

// export default Sidebar;
