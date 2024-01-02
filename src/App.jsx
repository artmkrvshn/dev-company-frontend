import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  departmentsLoader,
  DepartmentsPage,
} from './pages/department/DepartmentsPage.jsx';
import EmployeeCreatePage, {employeeCreatePageLoader} from "./pages/employee/EmployeeCreatePage.jsx";
import EmployeePage, {
  employeeLoader,
} from './pages/employee/EmployeePage.jsx';
import {
  employeesLoader,
  EmployeesPage,
} from './pages/employee/EmployeesPage.jsx';
import EmployeeUpdatePage, {employeeUpdatePageLoader} from './pages/employee/EmployeeUpdatePage.jsx';
import ProjectCreatePage, {
  projectCreatePageLoader,
} from './pages/project/ProjectCreatePage.jsx';
import ProjectPage, { projectLoader } from './pages/project/ProjectPage.jsx';
import { projectsLoader, ProjectsPage } from './pages/project/ProjectsPage.jsx';
import { positionsLoader, PositionsPage } from './pages/PositionsPage.jsx';
import ProjectUpdatePage from './pages/project/ProjectUpdatePage.jsx';
import { statusesLoader, StatusesPage } from './pages/StatusesPage.jsx';
import AppLayout from './ui/AppLayout.jsx';
import Error from './ui/Error.jsx';
import HomePage from './pages/HomePage.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/departments',
        element: <DepartmentsPage />,
        loader: departmentsLoader,
      },

      {
        path: '/employees',
        element: <EmployeesPage />,
        loader: employeesLoader,
      },
      {
        path: '/employees/create',
        element: <EmployeeCreatePage />,
        loader: employeeCreatePageLoader,
      },
      {
        path: '/employees/:id',
        element: <EmployeePage />,
        loader: employeeLoader,
      },
      {
        path: '/employees/update/:id',
        element: <EmployeeUpdatePage />,
        loader: employeeUpdatePageLoader,
      },

      {
        path: '/projects',
        element: <ProjectsPage />,
        loader: projectsLoader,
      },
      {
        path: '/projects/create',
        element: <ProjectCreatePage />,
        loader: projectCreatePageLoader,
      },
      {
        path: '/projects/:id',
        element: <ProjectPage />,
        loader: projectLoader,
      },
      {
        path: '/projects/update/:id',
        element: <ProjectUpdatePage />,
        loader: projectLoader,
      },

      {
        path: '/positions',
        element: <PositionsPage />,
        loader: positionsLoader,
      },
      {
        path: '/statuses',
        element: <StatusesPage />,
        loader: statusesLoader,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
