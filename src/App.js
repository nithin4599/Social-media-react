import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import { Navigate, Route, RouterProvider,createBrowserRouter,Link } from 'react-router-dom';
import Registor from './pages/registor/Registor';

function App() {

  const router = createBrowserRouter([{
    path: "/login",
    element: <Login/>
  },
  {
    path: "/registor",
    element: <Registor/>
  }


])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
