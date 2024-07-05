import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      projectName: 'Project 1',
      projectId: '001',
      category: 'Web',
      projectStatus: 'On-Going',
      phases: [
        {
          phaseName: 'Analysis',
          phaseCheckLists: [
            {
              isChecked: false,
              comment1: 'Hello',
              comment2: 'hello',
              checkListName: 'Data1'
            }
          ]
        },
        {
          phaseName: 'Design',
          phaseCheckLists: [
            {
              isChecked: false,
              comment1: '',
              comment2: '',
              checkListName: 'Data2'
            }
          ]
        },
        {
          phaseName: 'Development',
          phaseCheckLists: [
            {
              isChecked: false,
              comment1: '',
              comment2: '',
              checkListName: 'Data3'            
            }
          ]
        },
        {
          phaseName: 'Test & Deploy',
          phaseCheckLists: [
            {
              isChecked: false,
              comment1: '',
              comment2: '',
              checkListName: 'Data4'
            }
          ]
        }
      ] 
    }
  ],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    addPhase: (state, action) => {
      const { projectId, phase } = action.payload;
      const project = state.projects.find(p => p.projectId === projectId);
      if (project) {
        project.phases.push(phase);
      }
    },
    updateCheckList: (state, action) => {
      const { projectId, phaseIndex, checkListIndex, ...updates } = action.payload;
      const projectToUpdate = state.projects.find(project => project.projectId === projectId);
      if (projectToUpdate) {
        projectToUpdate.phases[phaseIndex].phaseCheckLists[checkListIndex] = {
          ...projectToUpdate.phases[phaseIndex].phaseCheckLists[checkListIndex],
          ...updates
        };
      }
    },
    addNewCheckList: (state, action) => {
      const { projectId, phaseIndex, checkList } = action.payload;
      const projectToAdd = state.projects.find(project => project.projectId === projectId);
      if(projectToAdd) {
        projectToAdd.phases[phaseIndex].phaseCheckLists.push(checkList)
      }
    },
    deleteCheckList: (state, action) => {
      const { projectId, phaseIndex, checkList } = action.payload;
      const projectToAdd = state.projects.find(project => project.projectId === projectId);
      if(projectToAdd) {
        projectToAdd.phases[phaseIndex].phaseCheckLists = checkList
      }
    },
    updateCheckListStatus: (state, action) => {
      const { projectId, phaseIndex, checkListIndex, checked } = action.payload;
      const projectToAdd = state.projects.find(project => project.projectId === projectId);
      if(projectToAdd) {
        projectToAdd.phases[phaseIndex].phaseCheckLists[checkListIndex].isChecked = checked
      }
    },
    setProject: (state, action) => {
      const { projects } = action.payload
      state.projects = projects
    }
  },
});

export const { addProject, addPhase, updateCheckList, addNewCheckList, deleteCheckList, updateCheckListStatus, setProject } = projectSlice.actions;
export default projectSlice.reducer;
