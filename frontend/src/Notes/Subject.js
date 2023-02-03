import React, { useEffect, useState } from 'react';
import './Subject.css';
import axios from 'axios';
import { useParams } from "react-router-dom"
import Parser from 'html-react-parser';
import { jsPDF } from "jspdf";
import { AiOutlineCloudDownload, AiFillLeftSquare, AiOutlineAlignLeft } from 'react-icons/ai'
import { BsChevronDoubleRight } from 'react-icons/bs'


function Subject() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [single, setSingle] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [navStyle, setNavStyle] = useState('sideContainer')
    useEffect(() => {
        const fetchData = () => {
            return (
                axios.get(`http://109.106.255.239:8000/api/posts`).then((response) => setData(response.data))
            )
        }
        fetchData();
        setToggle(false)
    }, [id]);

    const singleData = (title) => {
        setToggle(true)
        data.map(item => item.title === title && setSingle(item));
    }

    const dowNote = async () => {
        const doc = new jsPDF();
        var elementHTML = document.querySelector("#contnet");
        doc.html(elementHTML, {
            callback: function (doc) {
                doc.save(`${single.title}.pdf`);
            },
            x: 15,
            y: 5,
            width: 170,
            windowWidth: 650
        });
    }

    const clickOnTopic = (title) => {

        singleData(title);
        setNavStyle('sideContainer');
    }




    return (

        <div className="subContainer mt-3" >

            {/* SIDEBAR  START */}

            <div className={navStyle}>

                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href={`/subjct/${id}`} className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5  d-sm-inline">{id}</span>
                    </a>

                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item item dropdown">{data.map(item => { return item.sub === id && <a className="nav-link align-middle  nav-text" href={'#' + item.title} onClick={() => clickOnTopic(item.title)} key={item.title}>{item.title}</a> })}</li>
                    </ul>

                </div>

            </div>

            {/* SIDEBAR END */}

            {/* CONTENT START */}
            
            <div className="contentContainer px-4" >
                <button className=' tBtn' onClick={() => setNavStyle('showSide')} ><BsChevronDoubleRight className='aero' /></button>
                {toggle && <button onClick={dowNote} className="btn btn-primary mb-5" ><AiOutlineCloudDownload /> Download Note</button>}
                <div className='container subjct' id='contnet'>
                    {!toggle && data.map(item => { return item.sub === id && <div className='allContent' key={item._id}> {Parser(item.description)}</div> })}
                    {toggle && Object.keys(single).map(key => { return key === 'description' && <div key={Math.random() * 10}> {Parser(single[key])}</div> })}
                </div>
            </div>
            {/* CONTENT END */}

        </div>

    )
}

export default Subject
