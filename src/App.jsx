import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import Home from './components/Home'
import axios from 'axios'
export const API_URL = 'https://66cae4f659f4350f06502ac0.mockapi.io/Users'


function App() {
  let [users,setUsers] = useState([])
  let [edit,setEdit] = useState([])

  const getUsers = async()=>{
    try{
      let res = await axios.get(API_URL)
      setUsers(res.data)
    }
    catch (error) {console.log(error)}
  }

   useEffect(()=>{
    getUsers();
   },[])

  return <>
      <BrowserRouter>
      <TopBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard users={users} setUsers={setUsers} getUsers={getUsers}  setEdit={setEdit}/>}/>
          <Route path='/add-user' element={<AddUser/>}/>
          <Route path='/edit-user/:id' element={<EditUser  users={users} setUsers={setUsers} getUsers={getUsers} edit={edit} />}/>
          <Route path='#' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
  </>
}

export default App
