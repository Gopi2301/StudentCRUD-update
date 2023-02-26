import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import StudentTable from "./StudentTable"
import { StudentForm } from './StudentForm';



function App() {


  const [usersdata, setUserdata] = useState([
    { id: 1, name: "Gopinath", username: "Gopi23" },
    { id: 2, name: "Dharshinee", username: "Dhar16" },
    { id: 3, name: "Nimalan", username: "Nimmu23" },

  ])
  const [data, setData] = useState([]);
  const getUser =()=> {
    fetch("https://63d814e75dbd72324432fa01.mockapi.io/students")
      .then((data) => data.json())
      .then((ele) => setData(ele));
  }



  return (
    <div className="App">

      <div className="container">

        <h1>Student DashBoard</h1>
        <div className="dashboard-head">
          <div className='add-student'>
              <div>
                <h2>Add Student</h2>
                <StudentForm getUser={getUser} />
              </div>

          </div>
          <div className='students-table'>
            <h2>View Students</h2>
            <StudentTable  data={data} setData={setData} getUser={getUser}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
