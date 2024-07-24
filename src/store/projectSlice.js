import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    addTask: (state, action) => {
      const { projectId, phaseId, task } = action.payload;
      const project = state.projects.find(p => p.projectId === projectId);
      const phase = project.phases.find(p => p.id === phaseId)
      if (phase) {
        phase.tasks.push(task);
        phase.totalTasks++
      }

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
    },
    startTask: (state, action) => {
      const { projectId, phaseIndex, taskIndex } = action.payload
      const project = state.projects.find(p => p.projectId === projectId);
      project.phases[phaseIndex].tasks[taskIndex].started = true
    },
    completeTask: (state, action) => {
      const { projectId, phaseIndex, taskIndex } = action.payload
      const project = state.projects.find(p => p.projectId === projectId);
      project.phases[phaseIndex].tasksCompleted++
      project.phases[phaseIndex].tasks[taskIndex].completed = true
    },
    approveTask: (state, action) => {
      const { projectId, phaseIndex, taskIndex } = action.payload
      const project = state.projects.find(p => p.projectId === projectId);
      project.phases[phaseIndex].taskApproved++
      project.phases[phaseIndex].tasks[taskIndex].approved = true
    }
  },
});

export const { addProject, addPhase, updateCheckList, addNewCheckList, deleteCheckList, updateCheckListStatus, setProject, addTask,
  startTask, completeTask, approveTask
} = projectSlice.actions;
export default projectSlice.reducer;
