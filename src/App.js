import { useEffect, useState } from 'react';
import './App.css';
import axiosConfig from "./services/axiosConfig";

function App() {
  const [data, setData] = useState('')
  useEffect(()=>{
    const fetchData = async()=>{
      const Data = await axiosConfig.get('/users');
      console.log(Data)
      setData(Data);
    }
    fetchData();
  },[data])
  return (
    <div className="App">
      {data?(<>{data}</>):(<>Loading...</>)}
    </div>
  );
}

export default App;
