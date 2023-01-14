import './App.css';
import ActivityForm from './pages/ActivityForm';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dasboard from './pages/Dasboard';

function App() {
  const [user, setUser] = useState({ name: '', description: '', activitytype: '', duration: '' });
    const [userList, setUserList] = useState([])

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        console.log(userList)
        if (!user.name || !user.description || !user.activitytype || !user.duration) {
            alert("Please Enter all the Fields")
        }
        else{
            setUserList((prevItems) => {
                return [...prevItems, user];
            })};
        
    }
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path='/' element={<ActivityForm user={user} setUser={setUser} onSubmit={onSubmit} />}></Route>
          <Route exact path='/dashboard' element={<Dasboard userList={userList}/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
