import { useEffect, useState } from "react";

function StudentTable({data, setData , getUser}) {
  

  
  useEffect(()=>getUser(),[]);
  async function DeleteUser(id){
    await fetch(`https://63d814e75dbd72324432fa01.mockapi.io/students/${id}`,{
        method: "DELETE",
    }).then(()=>{
        return getUser();
    })
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>UserName</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>
              <button onClick={() => editUser(data)} className="edit-button">
                Edit
              </button>
              <button
                onClick={() => DeleteUser(data.id)}
                className="delete-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function deleteUser({id}){
    useEffect(() => {
        fetch(`https://63d814e75dbd72324432fa01.mockapi.io/students/${id}`,{
        method: "DELETE",
        })
          .then((data) => data.json())
          .then((ele) => setData(ele));
      }, []);

}
export default StudentTable;
