import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Cookies from 'js-cookie';
import Home from './Home';
import Error404 from './pages/404';
import Chat from './pages/Chat';
import Activity from './pages/Activity';
import Employees from './pages/Employees';
import Project, { NewProject } from './pages/projects/Project';
import AdminLogin from './pages/AdminLogin';
import Discussion from './pages/Discussion';
import DiscussionChat from './components/DiscussionChat';
import ViewProject, { ProjectOverview, ProjectPhases, ProjectFiles, ProjectTeams, ProjectSettings, ProjectTasks } from './pages/projects/ViewProject';

const ProtectedRoute = ({ component: Component }) => (
  Cookies.get('token') ? <Component /> : <Navigate to='/login' />
);

const LoginRedirect = ({ component: Component }) => (
  Cookies.get('token') ? <Navigate to='/' /> : <Component />
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginRedirect component={Login} />} />
        <Route path='/admin' element={<LoginRedirect component={AdminLogin} />} />
        <Route path="/" element={<ProtectedRoute component={Home} />}>
          <Route path='/employees' element={<ProtectedRoute component={Employees} />} />
          <Route path='/projects' element={<ProtectedRoute component={Project} />} />
          <Route path='/projects/new' element={<ProtectedRoute component={NewProject} />} />
          <Route path='/projects/:projectId' element={<ProtectedRoute component={ViewProject} />}>
            <Route path='overview' element={<ProtectedRoute component={ProjectOverview} />} />
            <Route path='phases' element={<ProtectedRoute component={ProjectPhases} />} />
            <Route path='tasks/:phaseId' element={<ProtectedRoute component={ProjectTasks} />} />
            <Route path='files' element={<ProtectedRoute component={ProjectFiles} />} />
            <Route path='teams' element={<ProtectedRoute component={ProjectTeams} />} />
            <Route path='settings' element={<ProtectedRoute component={ProjectSettings} />} />
          </Route>
          <Route path='/discussion' element={<ProtectedRoute component={Discussion} />}>
            <Route path='/discussion/:id' element={<ProtectedRoute component={DiscussionChat} />} />
          </Route>
        </Route>
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
