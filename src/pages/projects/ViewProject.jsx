// import { ArrowBack } from "@mui/icons-material"
// import { Button, IconButton, Typography } from "@mui/material"
// import { Box } from "@mui/system"
// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// import { Outlet, useNavigate, useParams } from "react-router-dom"

// const ViewProject = () => {

//   let { projectId } = useParams()
//   let navigate = useNavigate()

//   let project = useSelector(state => state.projects.projects.find(x => x.projectId === projectId))

//   useEffect(() => {
//   },[])

//   console.log(project)
//   return (
//     <>
//       <Box>
//         <Box padding={2} bgcolor='white' display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
//           <IconButton size="small" onClick={() => navigate('/projects')}>
//             <ArrowBack />
//           </IconButton>
//           <Box width='100%'>
//             <h4 className="font-medium text-[20px]">{project.projectName}</h4>
//           </Box>
//         </Box>
//         <Box display='flex' flexDirection='row'>
//           <Box display='flex' flexDirection='column' width='25%' padding={2}>
//             <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">Overview</button>
//             <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">Phases</button>
//             <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">Files</button>
//             <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">Teams</button>
//             <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">Settings</button>
//           </Box>
//           <Box padding={2} width='100%'>
            // <Box>
            //   <div className="flex justify-between mb-1">
            //     <span className="text-base font-medium text-blue-700 dark:text-white">Current Progress</span>
            //     <span className="text-sm font-medium text-blue-700 dark:text-white">{project.progress}%</span>
            //   </div>
            //   <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            //     <div className="relative bg-blue-600 h-2.5 rounded-full" style={{ width: 45 + '%', zIndex: 1 }}></div>
            //     <div className="relative bg-blue-200 h-2.5 rounded-full -mt-[10px]" style={{ width: 60 + '%', zIndex: 0 }}></div>
            //   </div>
            // </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   )
// }

// export default ViewProject

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Add, ArrowBack, Filter, Filter1, Search, Sort } from "@mui/icons-material";
import { IconButton, Box, Button, Typography, Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link, Outlet, useLocation } from "react-router-dom";
import { addPhase, addTask } from '../../store/projectSlice';


const ViewProject = () => {
  let { projectId } = useParams();
  
  let navigate = useNavigate();
  const location = useLocation();

  const [selectedSection, setSelectedSection] = useState(location.pathname.split('/').pop());

  useEffect(() => {
    if(location.pathname.split('/').includes('tasks')) {
      setSelectedSection('tasks')
      return
    }
    setSelectedSection(location.pathname.split('/').pop());
  }, [location.pathname]);


  let project = useSelector(state => state.projects.projects.find(x => x.projectId === projectId));

  const renderSectionContent = () => {
    switch (selectedSection) {
        case "tasks":
          return (
            <Box display='flex' flexDirection='column' width='25%' padding={2}>
              <Link to="phases" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                <button type="button" onClick={() => setSelectedSection("overview")}>
                  <ArrowBack sx={{ fontSize: 20 }} /> Back
                </button>
              </Link>
              <Link to="Tasks" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                <button type="button" onClick={() => setSelectedSection("overview")}>
                  Tasks
                </button>
              </Link>
            </Box>
          );
      default:
        return (
          <Box display='flex' flexDirection='column' width='25%' padding={2}>
            <Link to="overview" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
              <button type="button" onClick={() => setSelectedSection("overview")}>
                Overview
              </button>
            </Link>
            <Link to="phases" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
              <button type="button" onClick={() => setSelectedSection("phases")}>
                Phases
              </button>
            </Link> 
            <Link to="files" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
              <button type="button" onClick={() => setSelectedSection("overview")}>
                Files
              </button>
            </Link>
            <Link to="teams" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
              <button type="button" onClick={() => setSelectedSection("overview")}>
                Teams
              </button>
            </Link>
            <Link to="settings" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
              <button type="button" onClick={() => setSelectedSection("overview")}>
                Settings
              </button>  
            </Link>
          </Box>
        );
    }
  };

  return (
    <ProjectContext.Provider value={project}>
      <Box>
        <Box padding={2} bgcolor='white' display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
          <IconButton size="small" onClick={() => navigate('/projects')}>
            <ArrowBack />
          </IconButton>
          <Box width='100%'>
            <h4 className="font-medium text-[20px]">{project.projectName}</h4>
          </Box>
        </Box>
        <Box display='flex' flexDirection='row'>
          {renderSectionContent()}
          <Box padding={2} width='100%'>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ProjectContext.Provider>
  );
};

export default ViewProject;

// Create a Context for the project data
const ProjectContext = createContext(null);

// Custom hook to use the ProjectContext
export const useProject = () => {
  return useContext(ProjectContext);
};

const formatDate = (date) => {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  return `${months[new Date(date).getMonth() - 1]} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`
}

const ProjectOverview = () => {
  const project = useProject();

  console.log(project)

  return (
    <Box gap={2.5} display='flex' flexDirection='column'>
      <Box>
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">Current Progress</span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="relative bg-blue-600 h-2.5 rounded-full" style={{ width: 45 + '%', zIndex: 1 }}></div>
          <div className="relative bg-blue-200 h-2.5 rounded-full -mt-[10px]" style={{ width: 60 + '%', zIndex: 0 }}></div>
        </div>
        <div className="flex justify-start gap-5 mt-1">
          <span className="text-sm font-medium text-blue-600 dark:text-white">Approved</span>
          <span className="text-sm font-medium text-blue-200 dark:text-white">Completed</span>
        </div>
      </Box>
      <Box>
        <Box width='100%'>
          <h6 className="font-medium text-[15px]">Key Dates</h6>
        </Box>
        <Box padding={1} display={'flex'} flexDirection='row' gap={3}>
          <Box>
            <h6 className="font-medium text-[12.5px] text-gray-500 ">Start Date</h6>
            <h6 className="font-medium text-[12.5px] text-gray-500 ">Estimated Completion Date</h6>
            <h6 className="font-medium text-[12.5px] text-gray-500 ">Estimated Delivery Date</h6>
          </Box>
          <Box>
            <h6 className="font-medium text-[12.5px] text-gray-500 ">{formatDate(project.startDate)}</h6>
            <h6 className="font-medium text-[12.5px] text-gray-500 ">{formatDate(project.eCDate)}</h6>
            <h6 className="font-medium text-[12.5px] text-gray-500 ">{formatDate(project.eDDate)}</h6>
          </Box>
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' gap={1}>
        <Box width='100%'>
          <h6 className="font-medium text-[15px]">Phase Progress</h6>
        </Box>
        <Box display='flex' flexDirection='column' gap={2} padding={1} paddingTop={0.5}>
        {
          project.phases.map(phase => (
            <Box key={phase.id}>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">{phase.name}</span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="relative bg-blue-600 h-2.5 rounded-full" style={{ width: 45 + '%', zIndex: 1 }}></div>
                <div className="relative bg-blue-200 h-2.5 rounded-full -mt-[10px]" style={{ width: 60 + '%', zIndex: 0 }}></div>
              </div>
              <div className="flex justify-start gap-5 mt-1">
                <span className="text-sm font-medium text-blue-600 dark:text-white">Approved</span>
                <span className="text-sm font-medium text-blue-200 dark:text-white">Completed</span>
              </div>
            </Box>
          ))
        }
        </Box>
      </Box>
    </Box>
  );
};

const ProjectPhases = () => {
  const project = useProject();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openFilter, setOpenFilter] = useState(false)
  const [openAdd, setOpenAdd] = useState(false)
  const [phase, setPhase] = useState('')

  console.log(project)

  const handleAddPhase = () => {
    dispatch(addPhase({
      projectId: project.projectId,
      phase: {
        id: phase+project.phases.length,
        name: phase,
        tasks: []
      }
    }))
  }

  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Box bgcolor='white' display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
        <Box width='100%'>
          <h4 className="font-medium text-[20px]">Phases</h4>
        </Box>
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
          {/* <Button size="small" variant='contained' startIcon={<Sort />} onClick={() => {
            setOpenAdd(false)
            setOpenFilter(!openFilter)
          }}>Filter</Button> */}
          <Button size="small" variant='contained' startIcon={<Add />} onClick={() => {
            // setOpenFilter(false)
            setOpenAdd(!openAdd)
          }}>New</Button>
        </Box>
      </Box>
      { openAdd && 
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
          <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
              Enter Phase
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id='newPhase'
              onChange={(e) => setPhase(e.target.value)}
              value={phase}
              placeholder='Enter Phase Name'
            />
          </div>
          <Button size="small" variant='contained' onClick={handleAddPhase}>Add</Button>
        </Box>
      }
      {/* { openFilter && 
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
          <h4 className="font-medium text-[15px]">Assigned to you </h4>
          <Switch id="assigned"></Switch>
        </Box>
      } */}
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
        <div className="relative flex flex-1 flex-shrink-0" id="searchPhase">
          <label htmlFor="search" className="sr-only">
            Search phase
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id='searchPhase'
            name='search'
            placeholder='Search Phase'
          />
          {/* <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
        </div>
        <Button size="small" variant='contained' startIcon={<Search />}>Search</Button>
      </Box>
      <Box>
        <table className="hidden w-full rounded-md text-gray-900 md:block overflow-y-auto h-[65vh]">
          <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">

              </th>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Name
              </th>
              <th scope="col" className="px-4 py-5 font-medium w-full">
                Progress
              </th>
              <th scope="col" className="px-4 py-5 font-medium w-full">
                Task Completed
              </th>
              <th scope="col" className="px-4 py-5 font-medium w-full">
                Task Approved
              </th>
              <th scope="col" className="px-4 py-5 font-medium w-full">
                Total Tasks
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-900">
            {project.phases.map((phase, index) => (
                <tr key={phase.id} className="group cursor-pointer" onClick={() => navigate('/projects/'+project.projectId+'/tasks/'+phase.id)}>
                  <td className=" bg-white px-4 py-5 text-sm">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                    <div className="flex items-center gap-3">
                      <p>{phase.name}</p>
                    </div>
                  </td>
                  <td className=" bg-white px-4 py-5 text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-blue-700 dark:text-white">Current Process</span>
                      <span className="text-sm font-medium text-blue-700 dark:text-white">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: project.progress + '%' }}></div>
                    </div>
                  </td>
                  <td className="bg-white px-4 py-5 text-sm">
                    <div className='flex items-center justify-center'>
                      {phase.tasks.length}
                    </div>
                  </td>
                  <td className="bg-white px-4 py-5 text-sm">
                    <div className='flex items-center justify-center'>
                      {phase.tasks.length}
                    </div>
                  </td>
                  <td className="bg-white px-4 py-5 text-sm">
                    <div className='flex items-center justify-center'>
                      {phase.tasks.length}
                    </div>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

const ProjectTasks = () => {
  const project = useProject()
  const { phaseId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openFilter, setOpenFilter] = useState(false)
  const [openAdd, setOpenAdd] = useState(false)

  const handleAddTask = () => {
    let taskName = document.getElementById('newTask').value
    let priority = document.getElementById('priority').value
    let member = document.getElementById('member').value
    let eCDate = document.getElementById('expectedCompletionDate').value
    if(!taskName && !priority && !member && !eCDate) return
    
    dispatch(addTask({
      projectId: project.projectId,
      phaseId: phaseId,
      task: {
        taskId: taskName+phaseId,
        taskName,
        priority,
        member,
        eCDate,
        completed: false,
        approved: false
      }
    }))
  }

  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
    <Box bgcolor='white' display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
      <Box width='100%'>
        <h4 className="font-medium text-[20px]">Tasks</h4>
      </Box>
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
        <Button size="small" variant='contained' startIcon={<Sort />} onClick={() => {
          setOpenAdd(false)
          setOpenFilter(!openFilter)
        }}>Filter</Button>
        <Button size="small" variant='contained' startIcon={<Add />} onClick={() => {
          setOpenFilter(false)
          setOpenAdd(!openAdd)
        }}>New</Button>
      </Box>
    </Box>
    { openAdd && 
      <Box>
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
          <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
              Enter Task
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id='newTask'
              placeholder='Enter Task Name'
            />
          </div>
          <Button size="small" variant='contained' onClick={handleAddTask}>Add</Button>
        </Box>
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
          <div className="mt-4">
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
          <div className="mt-4">
            <div className="relative">
              <select
                id="member"
                name="member"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Member
                </option>
                {project.teams.map(team => (
                  <option value={team.name} key={team.id}>{team.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="estimatedCompletionDate" className="mt-1.5 block text-sm font-medium">
              Expected Completion Date:
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="expectedCompletionDate"
                  name="expectedCompletionDate"
                  type="date"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    }
    { openFilter && 
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
        <h4 className="font-medium text-[15px]">Assigned to you </h4>
        <Switch id="assigned"></Switch>
      </Box>
    }
    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
      <div className="relative flex flex-1 flex-shrink-0" id="searchPhase">
        <label htmlFor="search" className="sr-only">
          Search phase
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          id='searchPhase'
          name='search'
          placeholder='Search Phase'
        />
        {/* <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
      </div>
      <Button size="small" variant='contained' startIcon={<Search />}>Search</Button>
    </Box>
    <Box>
        <table className="hidden w-full rounded-md text-gray-900 md:block overflow-y-auto h-[65vh]">
          <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">

              </th>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6 w-full">
                Name
              </th>
              <th scope="col" className="px-4 py-5 font-medium w-full">
                Task Id
              </th>
              <th scope="col" className="px-4 py-5 font-medium w-full">
                Assigned To
              </th>
              <th scope="col" className="px-4 py-5 font-medium w-full">
                Expected Date of Completion
              </th>
              <th scope="col" className="px-4 py-5 font-medium w-full">
                Priority
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-900">
            {project.phases.map((phase) => {
              if(phase.id === phaseId) {
                return phase.tasks.map((x, index) => (
                  <tr key={x.taskId} className="group cursor-pointer">
                  <td className=" bg-white px-4 py-5 text-sm">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                    <div className="flex items-center gap-3">
                      <p>{x.taskName}</p>
                    </div>
                  </td>
                  <td className=" bg-white px-4 py-5 text-sm">
                    {x.taskId}
                  </td>
                  <td className="bg-white px-4 py-5 text-sm">
                    {x.member}
                  </td>
                  <td className="bg-white px-4 py-5 text-sm">
                    {x.eCDate}
                  </td>
                  <td className="bg-white px-4 py-5 text-sm">
                    {x.priority}
                  </td>
                </tr>  
                ))
              }
            })}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};


const ProjectFiles = () => {
  const project = useProject();

  return (
    <div>
      <h2>Files for {project.projectName}</h2>
      {/* Your ProjectFiles content goes here */}
    </div>
  );
};


const ProjectTeams = () => {
  const project = useProject();

  return (
    <div>
      <h2>Teams for {project.projectName}</h2>
      {/* Your ProjectTeams content goes here */}
    </div>
  );
};

const ProjectSettings = () => {
  const project = useProject();

  return (
    <div>
      <h2>Settings for {project.projectName}</h2>
      {/* Your ProjectSettings content goes here */}
    </div>
  );
};

export { ProjectOverview, ProjectPhases, ProjectFiles, ProjectTeams, ProjectSettings, ProjectTasks }






