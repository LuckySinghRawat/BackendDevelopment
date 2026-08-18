import { useState,useEffect } from 'react'
// import './App.css'
import axios from 'axios';

function App() {
  const [codes, setcodes] = useState([])

  useEffect(()=>{
    axios.get('/api/code')
    .then((res) =>{
      setcodes(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      <h1>
        LUCKY SINGH RAWAT ; age 22
      </h1>
      <p>CODES: {codes.length}</p>
      {
        codes.map((codes) => 
          <div key = {codes.id}>
            <h1>{codes.title}</h1>
            <p>{codes.content}</p>
          </div>
        )
      }
    </>
  )
}

export default App
