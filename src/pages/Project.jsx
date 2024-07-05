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
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Fade, Box, Button, Avatar, Input, IconButton, Grid, Checkbox, Typography, Collapse, Snackbar, Alert, useScrollTrigger } from "@mui/material";
import { ChevronLeft, ChevronRight, DeleteForever, Download, Edit } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, addPhase, updateCheckList, addNewCheckList, deleteCheckList, updateCheckListStatus } from '../store/projectSlice.js';
import { createHttpLink, gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client';

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

  return (
    <>
      <Box sx={{ margin: 1 }}>
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
              <Box sx={{ marginBottom: 1 }}>
                <Paper sx={{ padding: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Grid containter spacing={1} display="flex">
                        <Grid item top={6} position='relative' right={5}>
                          <Typography>
                            Name: 
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Input placeholder="Project Name" id="projectName"></Input>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={3}>
                      <Grid containter spacing={1} display="flex">
                        <Grid item top={6} position='relative' right={5}>
                          <Typography>
                            Id: 
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Input placeholder="Project ID" id="projectId"></Input>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={3}>
                      <Grid containter spacing={1} display="flex">
                        <Grid item top={6} position='relative' right={5}>
                          <Typography>
                            Category: 
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Input placeholder="Category" id='category'></Input>
                        </Grid>
                      </Grid>                    
                    </Grid>
                    <Grid item xs={3} display='flex' justifyContent='flex-end'>
                        <Button variant='contained' onClick={handleAddProject}>Add</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
              <TableContainer component={Paper} sx={{ maxHeight: window.screen.availHeight - 185 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>S.No</TableCell>
                      <TableCell sx={{ width: '20%' }}>Project ID</TableCell>
                      <TableCell>Project Name</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Project Status</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {projects.map((project, index) => (
                      <TableRow key={project.projectId} sx={{ cursor: 'pointer' }} onClick={() => handleClick(project)}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{project.projectId}</TableCell>
                        <TableCell>{project.projectName}</TableCell>
                        <TableCell>{project.category}</TableCell>
                        <TableCell>{project.projectStatus}</TableCell>
                        <TableCell align="right">
                          <Avatar>
                            <ChevronRight />
                          </Avatar>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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

