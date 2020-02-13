import React, { useState, useEffect } from 'react';
import Map from './Map'
import axios from "axios";

function App() {

  const [dataState, setDataState] = useState([])
  
  useEffect(() => {
    axios.get('/data').then(response => {
      const newDataState = response.data
      console.log(response.data)
      setDataState(newDataState)
    })
  }, [])

  

  return (
    <>
      <Map data={dataState} />
    </>
  )
}

export default App;