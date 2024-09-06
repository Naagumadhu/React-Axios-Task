import React, { useEffect,useState } from 'react'
import Show from './commonID/Show'
import axios from 'axios'
import { API_URL } from '../App'


function Home() {

  let [active,setActive] = useState([])

  const activeUsers = async()=>{
    try{
      let res = await axios.get(API_URL)

      let FilteredBlogs = res.data.filter((e)=>e.status)
      setActive(FilteredBlogs)
    }
    catch (error) {console.log(error)
    }
}
useEffect(() => {
  activeUsers();
},[]);

  
  return <>
  
      <div className="container">
        <div className="row">
            {active.map((e) => {
              return (
                <Show
                 name = {e.name}
                      username = {e.username}
                      email = {e.email}
                      street = {e.address.street}
                      suite = {e.address.suite}
                      city = {e.address.city}
                      zipcode = {e.address.zipcode}
                      lat = {e.address.geo.lat}
                      lng = {e.address.geo.lng}
                      website={e.website}
                      companyname = {e.company.name}
                      catchPhrase = {e.company.catchPhrase}
                      bs = {e.company.bs}
                      key={e.id}
                />
              )
            })}
        </div>
      </div>
  </>
}

export default Home
