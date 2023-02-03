import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';

const Paper = () => {

    const [file,setFile] = useState(null);
    const navigate = useNavigate()
    const onInputChange = (e) => {
        setFile(e.target.files[0])
    }
    

    const [sem, setSem] = useState(0);
    const [sub, setSub] = useState('0');
    const [title, setTitle] = useState('');
  
    const upload = () => {
        const data = new FormData();
        data.append('file',file,file.name);
        data.append('name',title);
        data.append('sem',sem);
        data.append('sub',sub);


        axios.post("http://109.106.255.239:8000/upload", data)
          .then(res => {
            toast.success("New Note Created 😎 Hurrehh! ")
          }).catch(err => console.log('err:yE',err));
      }

      useEffect(() => {
        let token = sessionStorage.getItem('Token')
       
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
    
  return (
    <div className='container'>
        <div className='App'>
                <br />
                <input className='my-2 px-4 py-1 font-size-5' type={'text'} placeholder='Title ..' value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSem(e.target.value) }}>
                    <option value="0">Select Semester:</option>
                    <option value="1 semester">1 Semester</option>
                    <option value="2 semester">2 Semester </option>
                    <option value="3 semester">3 Semester </option>
                    <option value="4 semester">4 Semester </option>
                    <option value="5 semester">5 Semester </option>
                    <option value="6 semester">6 Semester </option>
                    <option value="blog">Blog</option>
                </select>
                {
                    sem === "1 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="It tools & Application">It tools & Application</option>
                        <option value="Functional English">Functional English</option>
                        <option value="Introduction to C Language">Introduction to C Language</option>
                        <option value="Principle Of mathematic">Principle Of mathematic</option>
                    </select>}
                {
                    sem === "2 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="Descrite mathematics">Descrite mathematics</option>
                        <option value="Accounting & Financial management">Accounting & Financial management</option>
                        <option value="Digital Circuit & Logic Design">Digital Circuit & Logic Design</option>
                        <option value="Introduction to Object Oriented Programing & C++">Introduction to Object Oriented Programing & C++</option>
                    </select>}
                {
                    sem === "3 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="Operating System">Operating System</option>
                        <option value="Computer Oriented Mathematic">Computer Oriented Mathematic</option>
                        <option value="Data Structure">Data Structure</option>
                        <option value="Computer Organization & Architecture">Computer Organization & Architecture</option>
                    </select>}
                {
                    sem === "4 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="Introduction to DBMS">Introduction to DBMS</option>
                        <option value="Operation Research">Operation Research</option>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Computer Graphics">Computer Graphics</option>
                    </select>}
                {
                    sem === "5 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="Internet & JAVA Programing">Internet & JAVA Programing</option>
                        <option value="ORACLE & PL/SQL">ORACLE & PL/SQL</option>
                        <option value="Software Project Management">Software Project Management</option>
                        <option value="Computer Networks">Computer Networks</option>
                    </select>}
                {
                    sem === "6 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="Advance Network & Network Security">Advance Network & Network Security</option>
                        <option value="Web Development Tools & Techniques">Web Development Tools & Techniques</option>
                    </select>}
            </div>
            <input type={'file'}  onChange={onInputChange} />
            <button className='btn btn-primary my-4 px-4' onClick={upload}>Create</button>
            <ToastContainer />
    </div>
  )
}

export default Paper