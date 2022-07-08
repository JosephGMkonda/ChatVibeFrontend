import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Add from "./Components/Add";
import Details from "./Components/Details";
import Messages from "./Components/Messages";
import Explore from "./Components/Explore";
import Profile from "./Components/Profile";
import Notification from "./Components/Notification";
import Login from "./Components/Login"
import {Box,Stack} from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (

    <Box>
      <Router>
    <Navbar/>
     <Stack direction="row" justifyContent="space-between">
      <Sidebar/>
      <Route path="/login" element={<Login/>}/>
      <Routes>
      
    <Route exact path ="/" element={ <Feed/>}/>
    <Route path ="/details" element={<Details/>}/>
    <Route path ="/messages" element={<Messages/>}/>
    <Route path ="/explore" element={<Explore/>}/>
    <Route path ="/profile" element={<Profile/>}/>
    <Route path ="/notification" element={<Notification/>}/>
    

    

      
  </Routes>
  <Rightbar/>
      </Stack>

      <Add/>

      </Router>
    
    </Box>
  );
}

export default App;
