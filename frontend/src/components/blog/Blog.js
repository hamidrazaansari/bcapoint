import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Parser from  'html-react-parser';
import './Blog.css'
function Blog() {
   
  const [data,setData]=useState([]);

  const fetchData = () =>{
    return (
     axios.get("http://109.106.255.239:8000/api/posts").then((response) =>  setData(response.data))
    )
 }

 useEffect(()=>{
  fetchData();
 },[])



  return (
    <div id='blog'>
      {/* <div className="recentTab container-fluid px-5">
        <h4 className="recent">Recent</h4>
        <div className="recentBlogContainer">
        {Parser(data[data.length-1].title)}
        </div>
      </div> */}
  
      <div className="recentTab container-fluid px-5">
        <h4 className="recent">Blog</h4>
        <div className="recentBlogContainer">
          {data.map(item => item.sem === 'blog' && <div className="recentBF" key={item._id}> <h1 className='title'>{item.title}</h1><p>{Parser(item.description)}</p><hr/></div>)}
        </div>
      </div>
    </div>
   
  );
}

export default Blog
