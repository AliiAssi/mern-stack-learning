import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const API = "http://localhost:3001";


  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDisplayVisible,setIsDisplayVisible] = useState(true)
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const [Name, setName] = useState('')
  const [Age, setAge] = useState(0)
  const [Email, setEmail] = useState('')

  useEffect(() => {
    Axios.get(`${API}/`)
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, [users]);

  const toggleForm = () => {
    setIsFormVisible(true);
    setIsDisplayVisible(false)
  };
  const save = () =>{
    Axios.post(`${API}/add_user` ,{
      name : Name,
      age : Age,
      email :Email
    }
    )
    .then(
      res => {
        console.log(res.data)
      }
    )
    .catch((error) => {
      console.log("Error adding user:", error);
    });

    setIsFormVisible(false);
    setIsDisplayVisible(true);
  }
  const cancel = ()=>{
    setIsFormVisible(false);
    setIsDisplayVisible(true);
  }
  return (
    <>
      
      <br />
      {isDisplayVisible && (
        
        <div className='card' id='display'>
          <div className='container'>
        <button onClick={toggleForm}>Add User</button>
      </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="user">
              <ul>
                <li>
                  Name: <span>{user.name}</span>
                </li>
                <li>
                  Age: <span>{user.age}</span>
                </li>
                <li>
                  Email: <span>{user.email}</span>
                </li>
              </ul>
              <hr />
            </div>
          ))
        )}
      </div>
      )}

      {isFormVisible && (
        <div id="insert" className="container">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" className="name" onChange={e=>setName(e.target.value)} />
            <label htmlFor="age">Age:</label>
            <input type="text" name="age" id="age" className="name" onChange={e=>setAge(e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" className="name" onChange={e=>setEmail(e.target.value)} />
            <button onClick={save}>create</button>
            <hr />
            <button onClick={cancel}>cancel</button>
        </div>
      )}
    </>
  );
}

export default App;
