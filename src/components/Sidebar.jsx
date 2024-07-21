// import { Button, Avatar, IconButton, Drawer } from "@mui/material"
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import { Folder, Logout, MenuOutlined, People } from '@mui/icons-material'
// import Paper from "@mui/material/Paper";
// import { useLocation, useNavigate } from "react-router-dom";
// import '../Sidebar.sass'
// import Cookies from 'js-cookie'
// import { useState, useEffect } from "react";


// const Sidebar = () => {

//   const navigate = useNavigate()
//   const location = useLocation()

//   const determineSelected = (path) => {
//     switch (path) {
//       case '/projects':
//         return 1;
//       case '/employees':
//         return 2;
//       default:
//         return 0;
//     }
//   };


//   const [open, setOpen] = useState(true)
//   const [select, setSelected] = useState(() => determineSelected(location.pathname));

  

//   useEffect(() => {
//     setSelected(determineSelected(location.pathname));
//   }, [location.pathname]);
  

//     function handleSignOut() {
//       Cookies.remove('token')
//       setTimeout(() => navigate('/projects'), 1)
//       console.log(1)
//     }

//     const gotTo = (path, selected) => {
//       navigate(path)
//       setSelected(selected)
//     }
    
//     const toggleDrawer = () => {
//       setOpen(!open);
//     };

//     return (
//         <>
//           <Drawer
//               variant="permanent"
//               open={open}
//               PaperProps={{
//                   sx: {
//                       width: open ? 200 : 64,
//                       transition: 'width 0.3s',
//                       overflowX: 'hidden',
//                       position: 'relative',
//                       background: 'transparent'
//                   }
//               }}
//             >
//             <Paper elevation={4} sx={{
//                 margin: 0,
//                 minHeight: window.screen.availHeight - 90,
//                 maxHeight: window.screen.availHeight - 90,
//                 borderTopLeftRadius: 0,
//                 borderBottomLeftRadius: 0,
//                 backgroundColor: '#0A2463'
//             }}>
//             <Box sx={{ padding: open ? 4 : 1.25, paddingTop: 5 }}>
//               <Stack spacing={2}>
//                 <IconButton onClick={toggleDrawer} sx={{ position: 'absolute', top: 10, left: 10 }}>
//                  <MenuOutlined />
//                 </IconButton>
//                 { open ? <Button variant="contained" size="large" startIcon={
//                     <Avatar> 
//                         UN
//                     </Avatar>
//                 }
//                 sx={{
//                     backgroundColor: '#d9e7ff97',
//                     boxShadow: 0,
//                     ":hover": {
//                         backgroundColor: '#d9e7ff',
//                         boxShadow: "none"
//                     },
//                     color: "white",
//                     margin: -1
//                 }}
//                 >
//                   Username
//                 </Button>
//                 :
//                 <Box sx={{ paddingTop: 2}}>
//                   <Avatar sx={{ marginLeft: '-6px !Important' }}> 
//                     UN
//                   </Avatar>
//                 </Box>
//                 }
//                 <Button color="primary" className="sidebar-button" startIcon={<Folder />} sx={{
//                     justifyContent: "flex-start",
//                     minWidth: 0,
//                     backgroundColor: select === 1 ? '#d9e7ff' : 'transparent',
//                     ":hover": {
//                         backgroundColor: select === 1 ? '#d9e7ff' :  'rgba(0, 85, 255, 0.21)',
//                         boxShadow: "none",
//                     },
//                     color: select === 1 ? 'black' : 'white',
//                 }}
//                 onClick={() => gotTo('/projects', 1)}
//                 >{open && 'Projects'}</Button>
//                 <Button color="primary" className="sidebar-button" startIcon={<People />} sx={{
//                     justifyContent: "flex-start",
//                     minWidth: 0,
//                     backgroundColor: select === 2 ? '#d9e7ff' : 'transparent',
//                     ":hover": {
//                         backgroundColor: select === 2 ? '#d9e7ff' :  'rgba(0, 85, 255, 0.21)',
//                         boxShadow: "none"
//                     },
//                     color: select === 2 ? 'black' : 'white',
//                 }}
//                 onClick={() => gotTo('/employees', 2)}
//                 >{open && 'Employees'}</Button>
//                 <Button color="primary" className="sidebar-button" startIcon={<Logout />} sx={{
//                     justifyContent: "flex-start",
//                     minWidth: 0,
//                     ":hover": {
//                       backgroundColor: 'rgba(0, 85, 255, 0.21)',
//                         boxShadow: "none"
//                     },
//                     color: 'white',
//                 }}
//                 onClick={handleSignOut}
//                 >{open && 'Sign Out'}</Button>                 
//               </Stack>
//             </Box>
//             </Paper>
//             </Drawer>
//         </>
//     )
// }

// export default Sidebar

import { Button, Avatar, IconButton, Drawer } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Folder, Logout, MenuOutlined, People, GroupWork } from '@mui/icons-material';
import Paper from "@mui/material/Paper";
import { useLocation, useNavigate } from "react-router-dom";
import '../Sidebar.sass';
import Cookies from 'js-cookie';
import { useState, useEffect } from "react";
import Logo from "../assets/eghai-250x150-logo-2.png"

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const determineSelected = (path) => {
    switch (path) {
      case '/projects':
        return 1;
      case '/employees':
        return 2;
      case String(path).indexOf('/dashboard'):
        return 3;
      default:
        return 0;
    }
  };

  const [open, setOpen] = useState(true);
  const [select, setSelected] = useState(() => determineSelected(location.pathname));

  useEffect(() => {
    setSelected(determineSelected(location.pathname));
  }, [location.pathname]);

  function handleSignOut() {
    Cookies.remove('token');
    localStorage.clear();
    setTimeout(() => navigate('/projects'), 1);
    console.log(1);
  }

  const gotTo = (path, selected) => {
    navigate(path);
    setSelected(selected);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{
        sx: {
            width: open ? 200 : 64,
            transition: 'width 0.3s',
            overflowX: 'hidden',
            height: '100vh',
            position: 'sticky',
            background: 'transparent'
        }
      }}
    >
      <Paper elevation={4} sx={{
        margin: 0,
        height: '100%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#0A2463'
      }}>
        <Box sx={{ padding: open ? 1.2 : 1.25, paddingTop: 1.2 }}>
          <Stack spacing={2}>
            <Box display="flex" justifyContent='flex-start'>
              <IconButton onClick={toggleDrawer} sx={{ position: 'relative', top: 5 }}>
                <MenuOutlined sx={{ color: "white" }}/>
              </IconButton>
              { open && <img src={Logo} alt="logo" width={125} height={75}></img> }
            </Box>
            {open ? (
              <Button variant="contained" size="large" startIcon={<Avatar>UN</Avatar>}
                sx={{
                  backgroundColor: '#d9e7ff97',
                  boxShadow: 0,
                  ":hover": {
                    backgroundColor: '#d9e7ff',
                    boxShadow: "none"
                  },
                  color: "white",
                  margin: -1
                }}
              >
                Username
              </Button>
            ) : (
              <Box sx={{ paddingTop: 1, paddingBottom: 1, paddingLeft: 1 }}>
                <Avatar sx={{ marginLeft: '-6px !Important' }}>UN</Avatar>
              </Box>
            )}
            <Button color="primary" className="sidebar-button" startIcon={<Folder />} sx={{
              justifyContent: "flex-start",
              minWidth: 0,
              backgroundColor: select === 1 ? '#d9e7ff' : 'transparent',
              ":hover": {
                backgroundColor: select === 1 ? '#d9e7ff' : 'rgba(0, 85, 255, 0.21)',
                boxShadow: "none",
              },
              color: select === 1 ? 'black' : 'white',
            }}
              onClick={() => gotTo('/projects', 1)}
            >{open && 'Projects'}</Button>
            <Button color="primary" className="sidebar-button" startIcon={<People />} sx={{
              justifyContent: "flex-start",
              minWidth: 0,
              backgroundColor: select === 2 ? '#d9e7ff' : 'transparent',
              ":hover": {
                backgroundColor: select === 2 ? '#d9e7ff' : 'rgba(0, 85, 255, 0.21)',
                boxShadow: "none"
              },
              color: select === 2 ? 'black' : 'white',
            }}
              onClick={() => gotTo('/employees', 2)}
            >{open && 'Employees'}</Button>
            <Button color="primary" className="sidebar-button" startIcon={<GroupWork />} sx={{
              justifyContent: "flex-start",
              minWidth: 0,
              backgroundColor: select === 3 ? '#d9e7ff' : 'transparent',
              ":hover": {
                backgroundColor: select === 3 ? '#d9e7ff' : 'rgba(0, 85, 255, 0.21)',
                boxShadow: "none"
              },
              color: select === 3 ? 'black' : 'white',
            }}
              onClick={() => gotTo('/discussion', 3)}
            >{open && 'Discussion'}</Button>
            <Button color="primary" className="sidebar-button" startIcon={<Logout />} sx={{
              justifyContent: "flex-start",
              minWidth: 0,
              ":hover": {
                backgroundColor: 'rgba(0, 85, 255, 0.21)',
                boxShadow: "none"
              },
              color: 'white',
            }}
              onClick={handleSignOut}
            >{open && 'Sign Out'}</Button>
          </Stack>
        </Box>
      </Paper>
    </Drawer>
  );
};

export default Sidebar;

