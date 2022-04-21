import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import axios from 'axios';
import Menu from './Menu';

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [rNum, setRNum] = useState(Math.floor(Math.random() * 10) + 1)
  const [list, setList] = useState([])

  useEffect(() => {
    fetchData(rNum)
  }, [rNum])
  
  const fetchData = (number) => {
    let url = `https://swapi.dev/api/people/${number}`
    axios.get(url)
    .then(response => {
      setData(response.data)
      setLoading(false)
    })
  }

  const handleRecords = () => {
    let num = Math.floor(Math.random() * 10) + 1
    setRNum(num) 
    setList([...list, data])
  }

  

  return (
    <>
    <div className={style.app}>
      <button onClick={handleRecords}>Add record</button>
      <Menu loading={loading} list={list} setList={setList}/>
    </div>
    </>
  );
}

export default App;
