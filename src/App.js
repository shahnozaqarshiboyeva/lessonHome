import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CheckboxGroup, Checkbox} from '@adobe/react-spectrum'
import { useState ,useEffect } from 'react'
import axios from 'axios'
export default function App() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/todos').then(Response=>{
    setUsers(Response.data)
   })
  })
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-8 offset-2 mt-3">
          <table className='table table-bordered table-stripped table-hover'>
            <thead>
              <tr>
                <th>T/R</th>
                <th>userId</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((item,index)=>{
                  return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td><input value={item.completed} type="checkbox"/></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
