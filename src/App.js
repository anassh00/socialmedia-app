import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import EditForm from './Components/EditForm/EditForm';
import Message from './Components/Message/Message';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
      <Route path="/Profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path="/Edit" element={<PrivateRoute><EditForm/></PrivateRoute>}/>
      <Route path="/Message" element={<PrivateRoute><Message/></PrivateRoute>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="*" exact={true} element={<Navigate replace to="/"/>} />
    </Routes>
    </div>
  );
}

export default App;
