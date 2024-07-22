// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Fade, Box, Button, Avatar, Input, IconButton, Grid, Checkbox } from "@mui/material";
// import { ChevronLeft, ChevronRight, Delete, DeleteForever, Download, Edit } from '@mui/icons-material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Typography from '@mui/material/Typography';
// import Collapse from '@mui/material/Collapse';
// import { useState } from "react";


// function Row({ row }) {
//   const [open, setOpen] = useState(false);
//   const [checkList, setCheckList] = useState(row.phaseCheckLists)

//   const onSaveCheck = index => {
//     let comment1 = document.getElementById(`${row.phaseName}-checklist1-${index}`).value
//     let comment2 = document.getElementById(`${row.phaseName}-checklist2-${index}`).value
//     checkList[index].comment1 = comment1
//     checkList[index].comment2 = comment2
//     console.log(checkList)
//     setCheckList([...checkList])
//   }

//   const onDeleteCheck = index => {
//     let removed = checkList.filter((_, CheckIndex) => CheckIndex !== index)
//     console.log(removed)
//     setCheckList(removed)
//   }

//   const addCheckList = () => {
//     let checkListName = document.getElementById('checkListName').value
//     checkList.push({
//       isChecked: false,
//       comment1: '',
//       comment2: '',
//       checkListName: checkListName
//     })
//     setCheckList([...checkList])
//   }

//   return (
//     <>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell>
//           {row.phaseName}
//         </TableCell>
//         <TableCell align="right">
//           <Input placeholder="Check List Name" id="checkListName"></Input>  
//         </TableCell>
//         <TableCell>
//           <Button variant="contained" size="small" onClick={addCheckList} sx={{
//             fontSize: 12
//           }}>+ Add</Button>
//         </TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Table size="small">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Name</TableCell>
//                     <TableCell>Comment 1</TableCell>
//                     <TableCell>Comment 2</TableCell>
//                     <TableCell>Status</TableCell>
//                     <TableCell>Options</TableCell>
//                     <TableCell></TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {checkList.map((checklist, index) => (
//                     <TableRow key={index}>
//                       <TableCell>
//                         {checklist.checkListName}
//                       </TableCell>
//                       <TableCell>
//                         <Input defaultValue={checklist.comment1} id={`${row.phaseName}-checklist1-${index}`}></Input>
//                       </TableCell>
//                       <TableCell>
//                         <Input defaultValue={checklist.comment2} id={`${row.phaseName}-checklist2-${index}`}></Input>
//                       </TableCell>
//                       <TableCell component="th" scope="row">
//                       </TableCell>
//                       <TableCell>
//                         <Button variant="contained" size="small" color="success" onClick={() => onSaveCheck(index)} sx={{
//                           fontSize: 12
//                         }}>Save</Button>
//                       </TableCell>
//                       <TableCell>
//                         <Button variant="contained" size="small" color="warning" onClick={() => onDeleteCheck(index)} sx={{
//                           fontSize: 12
//                         }}>Delete</Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </>
//   );
// }


// const Project = () => {
//   const [checked, setChecked] = useState(true);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [projects, setProjects] = useState([
//     {
//       projectName: 'Project 1',
//       projectId: '001',
//       category: 'Web',
//       projectStatus: 'On-Going',
//       phases: [
//         {
//           phaseName: 'Analysis',
//           phaseCheckLists: [
//             {
//               isChecked: false,
//               comment1: 'Hello',
//               comment2: 'hello',
//               checkListName: 'Data'
//             }
//           ]
//         },
//         {
//           phaseName: 'Design',
//           phaseCheckLists: [
//             {
//               isChecked: false,
//               comment1: '',
//               comment2: '',
//               checkListName: 'Data'
//             }
//           ]
//         },
//         {
//           phaseName: 'Development',
//           phaseCheckLists: [
//             {
//               isChecked: false,
//               comment1: '',
//               comment2: '',
//               checkListName: 'Data'            
//             }
//           ]
//         },
//         {
//           phaseName: 'Test & Deploy',
//           phaseCheckLists: [
//             {
//               isChecked: false,
//               comment1: '',
//               comment2: '',
//               checkListName: 'Data'
//             }
//           ]
//         }
//       ] 
//     },
//   ])

//   const handleAddProject = () => {
//     let projectName = document.getElementById('projectName').value
//     let category = document.getElementById('category').value
//     let projectID = document.getElementById('projectId').value
//     let tempdata = projects
//     tempdata.push({
//       projectId: projectID,
//       projectName: projectName,
//       category: category,
//       projectStatus: 'On-Going',
//       phases: []
//     })
//     setProjects([...tempdata])
//   }

//   const addPhase = () => {
//     let project = projects.filter(x => x.projectId === selectedProject.projectId)
//     let phase = document.getElementById('phase').value
//     project[0].phases.push({
//       phaseName: phase,
//       phaseCheckLists: []
//     })
//     console.log(project[0])
//     setSelectedProject(project[0])
//   }

//   const handleClick = (project) => {
//     setSelectedProject(project);
//     setChecked(false);
//   };

//   const handleBack = () => {
//     setSelectedProject(null);
//     setChecked(true);
//   };

//   return (
//     <>
//       <Box sx={{
//         margin: 1
//       }}>
//         {selectedProject ? (
//           <Box>
//             <Paper sx={{
//               padding: 1
//             }}>
//               <Button onClick={handleBack} startIcon={<ChevronLeft />}>Back</Button>
//               <Typography variant="h3" fontFamily="roboto">
//                 {selectedProject.projectName}
//               </Typography>
//               <Box display='flex'>
//                 <TableContainer sx={{width: '50%'}}>
//                   <Table>
//                     <TableRow>
//                       <TableCell component="th" variant="head">
//                         Project Id: 
//                       </TableCell>
//                       <TableCell>
//                         {selectedProject.projectId}
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell component="th" variant="head">
//                         Category: 
//                       </TableCell>
//                       <TableCell>
//                         {selectedProject.category}
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell component="th" variant="head">
//                         Project Status: 
//                       </TableCell>
//                       <TableCell>
//                         {selectedProject.projectStatus}
//                       </TableCell>
//                     </TableRow>
//                   </Table>
//                 </TableContainer>
//                 <Box flexDirection='column' display='flex' justifyContent='space-around' alignItems='stretch' >
//                   <Button startIcon={<Edit />} variant="contained" color="warning">Edit</Button>
//                   <Button startIcon={<Download />} variant="contained" color="info">Download</Button>
//                   <Button startIcon={<DeleteForever />} variant="contained" color="success">Complete</Button>
//                 </Box>
//               </Box>
//               <TableContainer component={Paper} >
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Phases</TableCell>
//                       <TableCell></TableCell>
//                       <TableCell sx={{
//                         width: '70%'
//                       }} align="right">
//                         <Input placeholder="Phase Name" id="phase"></Input>  
//                       </TableCell>
//                       <TableCell align="right">
//                         <Button variant="contained" size="small" onClick={addPhase} sx={{
//                           fontSize: 12
//                         }}>+ Phase</Button>
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {selectedProject.phases.map((project, index) => (
//                       <Row key={index} row={project} />
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Paper>
//           </Box>
//         ) : (
//           <Fade in={checked}>
//             <Box>
//               <Box sx={{
//                 marginBottom: 1
//               }}>
//                 <Paper sx={{
//                   padding: 2
//                 }}>
//                   <Grid container spacing={2}>
//                     <Grid item xs={3}>
//                       <Grid containter spacing={1} display="flex">
//                         <Grid item top={6} position='relative' right={5}>
//                           <Typography>
//                             Name: 
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Input placeholder="Project Name" id="projectName"></Input>
//                         </Grid>
//                       </Grid>
//                     </Grid>
//                     <Grid item xs={3}>
//                       <Grid containter spacing={1} display="flex">
//                         <Grid item top={6} position='relative' right={5}>
//                           <Typography>
//                             Id: 
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Input placeholder="Project ID" id="projectId"></Input>
//                         </Grid>
//                       </Grid>
//                     </Grid>
//                     <Grid item xs={3}>
//                       <Grid containter spacing={1} display="flex">
//                         <Grid item top={6} position='relative' right={5}>
//                           <Typography>
//                             Category: 
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Input placeholder="Category" id='category'></Input>
//                         </Grid>
//                       </Grid>                    
//                     </Grid>
//                     <Grid item xs={3}>
//                         <Button variant='contained' onClick={handleAddProject}>Add</Button>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               </Box>
//               <TableContainer component={Paper} sx={{
//                 maxHeight: window.screen.availHeight - 185
//               }}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>S.No</TableCell>
//                       <TableCell sx={{ width: '20%' }}>Project ID</TableCell>
//                       <TableCell>Project Name</TableCell>
//                       <TableCell>Category</TableCell>
//                       <TableCell>Project Status</TableCell>
//                       <TableCell></TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {projects.map((project, index) => (
//                       <TableRow key={project.projectId} sx={{ cursor: 'pointer'}} onClick={() => handleClick(project)}>
//                         <TableCell>{index + 1}</TableCell>
//                         <TableCell>{project.projectId}</TableCell>
//                         <TableCell>{project.projectName}</TableCell>
//                         <TableCell>{project.category}</TableCell>
//                         <TableCell>{project.projectStatus}</TableCell>
//                         <TableCell align="right">
//                           <Avatar>
//                             <ChevronRight />
//                           </Avatar>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Box>
//           </Fade>
//         )}
//       </Box>
//     </>
//   );
// };

// export default Project;


import React, { useState, useEffect } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Fade, Box, Button, Avatar, Input, IconButton, Grid, Checkbox, Typography, Collapse, Snackbar, Alert, useScrollTrigger, TextField, List, ListItem, ListItemText } from "@mui/material";
import { Add, ArrowBack, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Close, DeleteForever, Download, Edit, ManageAccounts, People, Search } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, addPhase, updateCheckList, addNewCheckList, deleteCheckList, updateCheckListStatus } from '../store/projectSlice.js';
import { createHttpLink, gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import dp from '../assets/evil-rabbit.png'
import { useNavigate } from "react-router-dom";

const link = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
  credentials: 'include'
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});


const Row = ({ row, projectId, phaseIndex }) => {
  const [open, setOpen] = useState(false);
  const [checkList, setCheckList] = useState(row.phaseCheckLists.map(item => ({ ...item }))); 
  let res = useSelector((state) => state.projects.projects)
  const [openSnack, setOpenSnack] = useState(false)
  const [snackType, setSnackType] = useState('')
  const [snackMessage, setSnackMessage] = useState('')

  const dispatch = useDispatch();

  const onSaveCheck = (index) => {
    const updatedCheckList = [...checkList];
    updatedCheckList[index] = {
      ...updatedCheckList[index],
      comment1: document.getElementById(`${row.phaseName}-checklist1-${index}`).value,
      comment2: document.getElementById(`${row.phaseName}-checklist2-${index}`).value,
      isChecked: document.getElementById(`${row.phaseName}-status-${index}`).checked
    };
    dispatch(updateCheckList({ projectId, phaseIndex, checkListIndex: index, ...updatedCheckList[index] }));
    setCheckList(updatedCheckList);
    console.log(updatedCheckList[index])
    try {
      client
        .mutate({
          mutation: gql`
            mutation updateCheckList($projectId: String!, $phaseIndex: Int!, $checkListIndex: Int!, $checkList: PhaseCheckListInput!) {
              updateCheckList(projectId: $projectId, phaseIndex: $phaseIndex, checkListIndex: $checkListIndex, checkList: $checkList) {
                message
                status
                project {
                  projectName
                }
              }
            }
          `,
          variables: { projectId, phaseIndex, checkListIndex: index, checkList: {
            isChecked: updatedCheckList[index].isChecked,
            comment1: updatedCheckList[index].comment1,
            comment2: updatedCheckList[index].comment2,
            checkListName: updatedCheckList[index].checkListName,
          }},
        })
        .then( async (result) => {
          if(result.data.updateCheckList.status){
            try{
              console.log(result.data.updateCheckList)

            }
            catch{

            }
          }
          else{
            console.log(result.data)
          }
        })
        .catch((error) => console.log('Errors:', error.message));
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const onDeleteCheck = (index) => {
    const updatedCheckList = checkList.filter((_, idx) => idx !== index);
    dispatch(deleteCheckList({ projectId, phaseIndex, checkList: updatedCheckList }));
    setCheckList(updatedCheckList);
  };

  const addCheckList = () => {
    const checkListName = document.getElementById(`${row.phaseName}-checkListName`).value;
    if(!Boolean(checkListName.trim())) {
      if(!Boolean(checkListName.trim())) {
        setSnackType("error")
        setOpenSnack(true)
        setSnackMessage('Checklist Name cannot be empty')
        return 
      }
    }
    const checklist = {
      isChecked: false,
      comment1: '',
      comment2: '',
      checkListName: checkListName
    }
    const updatedCheckList = [
      ...checkList,
      {
        isChecked: false,
        comment1: '',
        comment2: '',
        checkListName: checkListName
      }
    ];
    dispatch(addNewCheckList({ projectId, phaseIndex, checkList: checklist }));
    setCheckList(updatedCheckList);
    try {
      client
        .mutate({
          mutation: gql`
            mutation addCheckList($projectId: String!, $phaseIndex: Int!, $checkList: PhaseCheckListInput!) {
              addCheckList(projectId: $projectId, phaseIndex: $phaseIndex, checkList: $checkList) {
                message
                status
                project {
                  projectName
                }
              }
            }
          `,
          variables: { projectId, phaseIndex, checkList: checklist },
        })
        .then( async (result) => {
          if(result.data.addCheckList.status){
            try{
              console.log(result.data.addCheckList)
              // dispatch(addProject({
              //   projectId: projectId,
              //   projectName: projectName,
              //   category: category,
              //   projectStatus: 'On-Going',
              //   phases: []
              // }));
            }
            catch{

            }
          }
          else{
            console.log(result.data)
          }
        })
        .catch((error) => console.log('Errors:', error.message));
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const updateStatus = index => {
    const status = document.getElementById(`${row.phaseName}-status-${index}`).checked;
    const updatedItem = { ...checkList[index], isChecked: status };
    const updatedCheckList = [
      ...checkList.slice(0, index),
      updatedItem,
      ...checkList.slice(index + 1)
    ];
    console.log(updatedCheckList)
    setCheckList(updatedCheckList);
    dispatch(updateCheckListStatus({ projectId, phaseIndex, checkListIndex: index, checked: status }));
  }
  
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          {row.phaseName}
        </TableCell>
        {/* <TableCell align="right">
          <Input placeholder="Check List Name" id={`${row.phaseName}-checkListName`} />
        </TableCell>
        <TableCell>
          <Button variant="contained" size="small" onClick={addCheckList} sx={{ fontSize: 12 }}>+ Add</Button>
        </TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Box display='flex' flexDirection='row-reverse' marginBottom={2}>
                <Button variant="contained" size="small" onClick={addCheckList} sx={{ fontSize: 12 }}>+ Add</Button>
                <Input placeholder="Check List Name" id={`${row.phaseName}-checkListName`} sx={{
                  marginRight: 3.5
                }} />
              </Box>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Comment 1</TableCell>
                    <TableCell>Comment 2</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Options</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {checkList.map((checklist, index) => (
                    <TableRow 
                    // key={`${checklist.checkListName}-${index}`}
                    >
                      <TableCell>
                        {checklist.checkListName}
                      </TableCell>
                      <TableCell>
                        <Input defaultValue={checklist.comment1} id={`${row.phaseName}-checklist1-${index}`} />
                      </TableCell>
                      <TableCell>
                        <Input defaultValue={checklist.comment2} id={`${row.phaseName}-checklist2-${index}`} />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Checkbox id={`${row.phaseName}-status-${index}`} checked={checklist.isChecked} onClick={() => updateStatus(index)} />
                      </TableCell>
                      <TableCell>
                        <Button variant="contained" size="small" color="success" onClick={() => onSaveCheck(index)} sx={{ fontSize: 12 }}>Save</Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="contained" size="small" color="error" onClick={() => onDeleteCheck(index)} sx={{ fontSize: 12 }}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <CustomizedSnackbars open={openSnack} setOpen={setOpenSnack} type={snackType} message={snackMessage} />
    </>
  );
}


const Project = () => {
  const [checked, setChecked] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openSnack, setOpenSnack] = useState(false)
  const [snackType, setSnackType] = useState('')
  const [snackMessage, setSnackMessage] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    if (selectedProject) {
      const updatedProject = projects.find(project => project.projectId === selectedProject.projectId);
      setSelectedProject(updatedProject);
    }
  }, [projects]);


  const handleAddProject = () => {
    let projectName = document.getElementById('projectName').value;
    let category = document.getElementById('category').value;
    let projectId = document.getElementById('projectId').value;
    let projectStatus = 'On-Going'
    let phases = []
    dispatch(addProject({
      projectId: projectId,
      projectName: projectName,
      category: category,
      projectStatus: 'On-Going',
      phases: []
    }));
    try {
      client
        .mutate({
          mutation: gql`
            mutation createProject($projectName: String!, $projectId: String!, $category: String!, $projectStatus: String!, $phases: [PhaseInput!]) {
              createProject(projectName: $projectName, projectId: $projectId, category: $category, projectStatus: $projectStatus, phases: $phases) {
                message
                status
                project {
                  projectName
                }
              }
            }
          `,
          variables: { projectName, projectId, category, projectStatus, phases },
        })
        .then( async (result) => {
          if(result.data.createProject.status){
            try{
              console.log(result.data.createProject)
              // dispatch(addProject({
              //   projectId: projectId,
              //   projectName: projectName,
              //   category: category,
              //   projectStatus: 'On-Going',
              //   phases: []
              // }));
            }
            catch{

            }
          }
          else{
            console.log(result.data)
          }
        })
        .catch((error) => console.log('Errors:', error.message));
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const addNewPhase = projectId => {
    let phaseName = document.getElementById('phase').value;
    if(!Boolean(phaseName.trim())) {
      setSnackType("error")
      setOpenSnack(true)
      setSnackMessage('Phase Name cannot be empty')
      return 
    }
    let phase = {
      phaseName: phaseName,
      phaseCheckLists: []
    }
    dispatch(addPhase({ projectId: selectedProject.projectId, phase: { phaseName, phaseCheckLists: [] }}));
    try {
      client
        .mutate({
          mutation: gql`
            mutation addPhase($projectId: String!, $phase: PhaseInput!) {
              addPhase(projectId: $projectId, phase: $phase) {
                message
                status
                project {
                  projectName
                }
              }
            }
          `,
          variables: { projectId, phase },
        })
        .then( async (result) => {
          if(result.data.addPhase){
            try{
              console.log(result.data.addPhase)
              // dispatch(addProject({
              //   projectId: projectId,
              //   projectName: projectName,
              //   category: category,
              //   projectStatus: 'On-Going',
              //   phases: []
              // }));
            }
            catch{

            }
          }
          else{
            console.log(result.data)
          }
        })
        .catch((error) => console.log('Errors:', error.message));
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const handleClick = (project) => {
    setSelectedProject(project);
    setChecked(false);
  };

  const handleBack = () => {
    setSelectedProject(null);
    setChecked(true);
  };

  let customers = [
    {
      id: '4961',
      name: 'Evil Rabbit',
      email: 'evil@rabbit.com',
      image_url: dp,
    },
    {
      id: '4377',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      image_url: dp,
    },
    {
      id: '742f',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      image_url: dp,
    },
    {
      id: '44a2',
      name: 'Michael Novotny',
      email: 'michael@novotny.com',
      image_url: dp,
    },
    {
      id: '4F4A',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      image_url: dp,
    },
    {
      id: '4157',
      name: 'Balazs Orban',
      email: 'balazs@orban.com',
      image_url: dp,
    },
    {
      id: '44a2',
      name: 'Michael Novotny',
      email: 'michael@novotny.com',
      image_url: dp,
    },
    {
      id: '0ACF',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      image_url: dp,
    },
    {
      id: '1A011',
      name: 'Balazs Orban',
      email: 'balazs@orban.com',
      image_url: dp,
    },
  ];  

  const onSearch = () => {
    let projectNameOrId = document.getElementById('searchProject')
    let result = customers.filter(projects => projects.name.includes(projectNameOrId.value) || projects.id.includes(projectNameOrId.value))
    customers = result
  }

  return (
    <>
      <Box>
        {selectedProject ? (
          <Box>
            <Paper sx={{ padding: 1 }}>
              <Button onClick={handleBack} startIcon={<ChevronLeft />}>Back</Button>
              <Typography variant="h3" fontFamily="roboto">
                {selectedProject.projectName}
              </Typography>
              <Box display='flex' justifyContent='space-between'>
                <TableContainer sx={{ width: '50%' }}>
                  <Table>
                    <TableRow>
                      <TableCell component="th" variant="head">
                        Project Id: 
                      </TableCell>
                      <TableCell>
                        {selectedProject.projectId}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" variant="head">
                        Category: 
                      </TableCell>
                      <TableCell>
                        {selectedProject.category}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" variant="head">
                        Project Status: 
                      </TableCell>
                      <TableCell>
                        {selectedProject.projectStatus}
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableContainer>
                <Box flexDirection='column' display='flex' justifyContent='space-around' alignItems='stretch' >
                  <Button startIcon={<Edit />} variant="contained" color="warning">Edit</Button>
                  <Button startIcon={<Download />} variant="contained" color="info">Download</Button>
                  <Button startIcon={<DeleteForever />} variant="contained" color="success">Complete</Button>
                </Box>
              </Box>
              <TableContainer component={Paper} >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Phases</TableCell>
                      <TableCell></TableCell>
                      <TableCell sx={{ width: '70%' }} align="right">
                        <Input placeholder="Phase Name" id="phase"></Input>  
                      </TableCell>
                      <TableCell align="right">
                        <Button variant="contained" size="small" onClick={() => addNewPhase(selectedProject.projectId)} sx={{ fontSize: 12 }}>+ Phase</Button>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectedProject.phases.map((project, index) => (
                      <Row key={index} row={project} projectId={selectedProject.projectId} phaseIndex={index} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        ) : (
          <Fade in={checked}>
            <Box>
              <Box padding={2} bgcolor='white' display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
                <Box width='100%'>
                  <Typography variant="h5">Projects</Typography>
                </Box>
                <Box width='25%'>
                  <div className="relative flex flex-1 flex-shrink-0" id="searchProject">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                      placeholder='Search Project'
                    />
                    {/* <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                  </div>
                </Box>
                <Box>
                  <Button variant="contained" startIcon={<Search />} size="small" onClick={onSearch}>Search</Button>
                </Box>
                <Box>
                  <Button variant="contained" size="small" onClick={() => navigate('/projects/new')}>New</Button>
                </Box>
              </Box>
              <Box sx={{ padding: 1, overflow: 'hidden' }}>
              <table className="hidden w-full rounded-md text-gray-900 md:block overflow-x-scroll h-[80vh]">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Id
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Client
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium w-full">
                      Progress
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile`}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.total_invoices}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.total_pending}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {customer.total_paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </Box>
            </Box>
          </Fade>
        )}
      </Box>
      <CustomizedSnackbars open={openSnack} setOpen={setOpenSnack} type={snackType} message={snackMessage} />
    </>
  );
};

export default Project;

function CustomizedSnackbars({ open, setOpen, type, message }) {

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert
          onClose={() => setOpen(false)}
          severity={type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export const NewProject = () => {

  const [teamMembers, setTeamMembers] = useState([])
  const [teams, setTeams] = useState([])
  const [phases, setPhases] = useState([]);
  const [idDisable, setIdDisable] = useState(false)
  const [phaseName, setPhaseName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [tasks, setTasks] = useState({});
  const [taskName, setTaskName] = useState('');
  const [selectedPhase, setSelectedPhase] = useState(null);


  const navigate = useNavigate()

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };


  let users = [
    {
      id: '4961',
      name: 'Evil Rabbit',
      email: 'evil@rabbit.com',
      image_url: dp,
    },
    {
      id: '4377',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      image_url: dp,
    },
    {
      id: '742f',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      image_url: dp,
    },
    {
      id: '44a2',
      name: 'Michael Novotny',
      email: 'michael@novotny.com',
      image_url: dp,
    },
    {
      id: '4F4A',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      image_url: dp,
    },
    {
      id: '4157',
      name: 'Balazs Orban',
      email: 'balazs@orban.com',
      image_url: dp,
    },
  ];  

  const addTeamMembers = () => {
    const member = document.getElementById('teamMembers');
    const temp = users.find(x => x.id === member.value);
    if (temp && !teamMembers.some(member => member.id === temp.id)) {
      setTeamMembers(prevMembers => [...prevMembers, temp]);
    }
  };

  const handleAddPhase = () => {
    if (phaseName.trim()) {
      setPhases([...phases, { id: phases.length + 1, name: phaseName, tasks: [] }]);
      setPhaseName('');
    }
  };

  const handleAddTask = () => {
    if (taskName && selectedPhase !== null) {
      const updatedPhases = phases.map(phase => {
        if (phase.id === selectedPhase.id) {
          return { ...phase, tasks: [...phase.tasks, { id: phase.tasks.length + 1, name: taskName, completed: false }] };
        }
        return phase;
      });
      setPhases(updatedPhases);
      setTaskName('');
    }
  };

  const handleToggleTaskCompletion = (phaseId, taskId) => {
    const updatedPhases = phases.map(phase => {
      if (phase.id === phaseId) {
        return {
          ...phase,
          tasks: phase.tasks.map(task => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed };
            }
            return task;
          })
        };
      }
      return phase;
    });
    setPhases(updatedPhases);
  };

  const handleRemoveTask = (phaseId, taskId) => {
    const updatedPhases = phases.map(phase => {
      if (phase.id === phaseId) {
        return {
          ...phase,
          tasks: phase.tasks.filter(task => task.id !== taskId)
        };
      }
      return phase;
    });
    setPhases(updatedPhases);
  };

  const genProjId = (name) => {
    if(!name.trim()){
      document.getElementById('projectId').value = ''
      return
    }
    let list = name.split(' ')
    if(list.length >= 2) {
      document.getElementById('projectId').value =  list[0][0] + list[1][0] + new Date().getDate();
    }
    else if(name.length >= 2){
      document.getElementById('projectId').value =  list[0][0] + list[0][1] + new Date().getDate(); 
    }
  }

  const handleAddTeam = () => {
    let team = document.getElementById('teamName')
    if(team.value.trim()){
      const projectManagerId = document.getElementById('chooseManager').value;
      const teamLeadId = document.getElementById('chooseLead').value;
      if (projectManagerId && teamLeadId) {
        let tempData = {
          teamName: team.value,
          teamMembers: []
        }
        tempData.teamMembers = [
          users.find(user => user.id === projectManagerId),
          users.find(user => user.id === teamLeadId)
        ]
        setTeams([...teams, tempData])
        team.value = ''
      }
    }
  }

  const addTeamMembersToDed = (index) => {
    const member = document.getElementById('selectedTeamMembers');
    const temp = teamMembers.find(x => x.id === member.value);
    if (temp && !teams[index].teamMembers.some(member => member.id === temp.id)) {
      teams[index].teamMembers.push(temp)
      let newData = teams
      setTeams(newData)
    }
    console.log(teams)
  }




  return (
    <>
      <Box>
        <Box padding={2} bgcolor="white" display="flex" flexDirection="row" alignItems="center" gap={2}>
          <IconButton onClick={() => navigate('/projects')}>
            <ArrowBack />
          </IconButton>
          <Box width="100%">
            <Typography variant="h5">Create New Projects</Typography>
          </Box>
        </Box>
        <Box marginLeft={9}>
          <Box>
            <Typography variant="h6">1. Basic Details</Typography>
          </Box>
          <Box display="flex" flexDirection="row" gap={2} marginLeft={3} marginTop={3}>
            <div className="mb-4">
              <label htmlFor="projectName" className="mb-2 block text-sm font-medium">
                Project Name
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="projectName"
                    name="projectName"
                    type="text"
                    placeholder="Project Name"
                    onChange={(e) => genProjId(e.target.value)}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="projectId" className="mb-2 block text-sm font-medium">
                Project Id
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  {idDisable ?
                    <input
                      id="projectId"
                      name="projectId"
                      type="text"
                      placeholder="Project Id"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                    :
                    <input
                      id="projectId"
                      name="projectId"
                      type="text"
                      disabled
                      placeholder="Project Id"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  }
                </div>
                <div className="flex align-center">
                  <input
                    id="projectIdLock"
                    name="projectIdLock"
                    type="checkbox"
                    onClick={() => {
                      setIdDisable(!idDisable)
                      document.getElementById('projectId').value = ''

                    }}
                    className="peer block mt-2 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                  <label className="text-sm font-small mt-2 ms-1" htmlFor="projectIdLock">
                    {' '}
                    - Click for custom project id
                  </label>
                </div>
              </div>
            </div>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={4} marginLeft={3} marginTop={3}>
            <div className="mb-4">
              <label htmlFor="startDate" className="mb-2 block text-sm font-medium">
                Starting Date:
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    placeholder="Starting Date"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
            <ArrowRight fontSize="10px" />
            <div className="mb-4">
              <label htmlFor="estimatedCompletionDate" className="mb-2 block text-sm font-medium">
                Estimated Completion Date:
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="estimatedCompletionDate"
                    name="estimatedCompletionDate"
                    type="date"
                    placeholder="Estimated Completion Date"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4 ms-10">
              <label htmlFor="estimatedDeliveryDate" className="mb-2 block text-sm font-medium">
                Estimated Delivery Date:
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="estimatedDeliveryDate"
                    name="estimatedDeliveryDate"
                    type="date"
                    placeholder="Estimated Delivery Date"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
          </Box>
          {/* <Box display="flex" flexDirection="row" gap={2} marginLeft={3} marginTop={3}>
            <div className="mb-4">
              <label htmlFor="projectDescription" className="mb-2 block text-sm font-medium">
                Project Description
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    placeholder="Project Description"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          </Box> */}
          <Box display="flex" flexDirection="row" gap={2} marginLeft={3} marginTop={3}>
            <div className="mb-4">
              <label htmlFor="clientName" className="mb-2 block text-sm font-medium">
                Client Name
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="clientName"
                    name="clientName"
                    type="text"
                    placeholder="Client Name"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="budget" className="mb-2 block text-sm font-medium">
                Budget
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="budget"
                    name="budget"
                    type="number"
                    placeholder="Budget"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="priority" className="mb-2 block text-sm font-medium">
                Priority
              </label>
              <div className="relative">
                <select
                  id="priority"
                  name="priority"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Priority
                  </option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
          </Box>
        </Box>
        <Box marginLeft={9}>
          <Box>
            <Typography variant="h6">2. Project Management</Typography>
          </Box>
          <Box display="flex" flexDirection="row" gap={5} marginLeft={3} marginTop={3}>
            <div className="mb-4">
              <label htmlFor="chooseManager" className="mb-2 block text-sm font-medium">
                Choose Project Manager
              </label>
              <div className="relative">
                <select
                  id="chooseManager"
                  name="chooseManager"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select manager
                  </option>
                  {users.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  ))}
                </select>
                <ManageAccounts className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="chooseLead" className="mb-2 block text-sm font-medium">
                Choose Team Lead
              </label>
              <div className="relative">
                <select
                  id="chooseLead"
                  name="chooseLead"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Lead
                  </option>
                  {users.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  ))}
                </select>
                <ManageAccounts className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={4} marginLeft={3} marginTop={3}>
            <div className="mb-4">
              <label htmlFor="teamMembers" className="mb-2 block text-sm font-medium">
                Choose Team Members
              </label>
              <div className="relative">
                <select
                  id="teamMembers"
                  name="teamMembers"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  onChange={addTeamMembers}
                >
                  <option value="" disabled>
                    Select Members
                  </option>
                  {users.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  ))}
                </select>
                <People className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </Box>
          <Box display="flex" flexDirection="row" gap={2.5} marginLeft={3} marginTop={1} flexWrap="wrap">
            {teamMembers.map(x => (
              <div key={x.id} className="relative">
                <p className="peer block w-fit-content rounded-md border border-gray-200 py-2 pl-10 pe-2 text-sm outline-2 placeholder:text-gray-500">
                  {x?.name ?? 'no Name'}
                </p>
                <Close className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            ))}
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={2} marginTop={3} marginLeft={3}>
            <div className="mb-4">
              <label htmlFor="projectName" className="mb-2 block text-sm font-medium">
                Team Name
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="teamName"
                    name="teamName"
                    type="text"
                    placeholder="Team Name"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
            <Button variant="contained" onClick={handleAddTeam} size="small" sx={{ marginTop: 1.25 }}>Add Phase</Button>
          </Box>
          <Box display="flex" flexDirection="column" gap={2.5} marginLeft={3} marginTop={1} flexWrap="wrap">
            <table className="hidden rounded-md text-gray-900 md:block">
              <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                <tr>
                  {teams.map((team, index) => (
                    <th key={team.teamName} scope="col" className="px-4 py-5 font-medium sm:pl-6 relative">
                      <div className="flex items-center gap-2">
                        <div>{team.teamName}</div>
                        <IconButton size="small" onClick={() => handleDropdownToggle(index)}>
                          <Add />
                        </IconButton>
                        {dropdownOpen === index && (
                          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                            <select
                              id="selectedTeamMembers"
                              name="selectedTeamMembers"
                              className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                              defaultValue=""
                              onChange={() => addTeamMembersToDed(index)}
                            >
                              <option value="" disabled>
                                Select Members
                              </option>
                              {teamMembers.map((member) => (
                                <option key={member.id} value={member.id}>
                                  {member.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-900">
                {teams.map((team) => (
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm" key={team.teamName}>
                      {team.teamMembers.map((member) => (
                        <div key={member.id}>{member.name}</div>
                      ))}
                    </td>

                ))}
              </tbody>
            </table>

            {teams.length > 0 && 
              <div className="flex align-center">
                <input
                  id="createDiscussion"
                  name="createDiscussion"
                  type="checkbox"
                  className="peer block mt-2 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <label className="text-sm font-small mt-2 ms-1" htmlFor="createDiscussion">
                  {' '}
                  - Create discussion for all teams
                </label>
              </div>
            }
          </Box>
        </Box>
        <Box marginLeft={9}>
          <Box>
            <Typography variant="h6">3. Management and Tracking</Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={2} marginLeft={3} marginTop={3}>
            <div className="mb-4">
              <label htmlFor="projectName" className="mb-2 block text-sm font-medium">
                Phase Name
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="phaseName"
                    name="phaseName"
                    type="text"
                    onChange={(e) => setPhaseName(e.target.value)}
                    placeholder="Phase Name"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
            <Button variant="contained" onClick={handleAddPhase} size="small" sx={{ marginTop: 1.25 }}>Add Phase</Button>
          </Box>
          <Box marginTop={3}>
            <List>
              {phases.map(phase => (
                <ListItem key={phase.id} button onClick={() => setSelectedPhase(phase)} selected={selectedPhase?.id === phase.id}>
                  <ListItemText primary={phase.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  )
}


