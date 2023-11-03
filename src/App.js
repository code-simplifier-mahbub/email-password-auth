import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './component/Main/Main';
import RegisterReactBootstrap from './component/RegisterReactBootstrap/RegisterReactBootstrap';
import LoginBootstrap from './component/LoginBootstrap/LoginBootstrap';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <RegisterReactBootstrap></RegisterReactBootstrap>
        },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootstrap></LoginBootstrap>
      }
      ]
    }
  ])
  
  return (
  
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
