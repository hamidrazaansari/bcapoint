import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';
import Parser from 'html-react-parser';
import './Search.css'

const Search = () => {
  
  const { title } = useParams();
  const [data,setData] = useState([]);

  const fetchData = () => {
    return (
        axios.get(`http://109.106.255.239:8000/api/posts`).then((response) => setData(response.data))
    )
}

useEffect(()=>{
  fetchData(); 
},[]);
  
  return (
    <div className='container-fluid search'>{data.map(item => item.title === title && <div><h4 className='title'>{item.title}</h4><p>{Parser(item.description)}</p><p className='author'>Written By - {item.username}</p></div>)}</div>
  )
}

export default Search