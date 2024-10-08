import './App.css';

import React, { useState } from 'react';
import './App.css';
import bearerToken from './components/tokens/token.json'
/**
 *  Component that contains form for creating types, along with integration code to the backend.
 * 
 * @returns component that contains form for creating types 
 */
function Types() {
  const tokens = JSON.stringify(bearerToken['bearer-tokens']);
  const token = tokens.slice(20,tokens.length-3);
  const [type, setType] = useState("");
  const[columns, setColumns] = useState('');
  const typeCol = columns.split(',')

  /**
   * Method that handles the contents of a form upon submission
   */
  const handleSubmit = ()=>{
    fetch("http://localhost:8080/type/add-type",{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+ token
      },
      body:JSON.stringify({
        "table_name": type,
        "columns": typeCol
      })
    })
    .then((res)=>{
      res.text()
      .then((response)=>{
       console.log(response)
       alert(response)
      })
     })
     .catch((err)=>{
       console.log(err)
     })
  }


  return (
    <div className="App" style={{ marginLeft: '15%', padding: '1px 16px', height: '1000px' }}>
      <h1>Create New Type</h1>
      <form onSubmit={handleSubmit}> {/* Ensure handleSubmit is defined */}
        <label htmlFor="table_name">Type:</label>
        <input
          id="table_name"
          name="table_name"
          type='text'
          required
          value={type}
          onChange={(event)=>setType(event.target.value)}
        />
        <br></br>
        <label htmlFor="type-columns">Column (Seperated by commas):</label>
        <textarea
          id="type-columns"
          name="columns"
          type='text'
          required
          value={columns}
          onChange={(e)=>setColumns(e.target.value)}
        />
        <br></br>
        <button type="submit">Create type</button>
      </form>
    </div>
  );
}



export default Types;
