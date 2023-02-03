import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { saveAs } from 'file-saver';
import './Books.css';
import stand from './image/stand.png'
import Data from './Data';
import ShowMore from './ShowMore';



function Books() {

    var item = Data[Math.floor(Math.random() * Data.length)];
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([])

    const fetchData = () => {
        return (
            axios.get(`http://109.106.255.239:8000/api/book`).then((response) => setData(response.data))
        )
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.bookType === cat);
        setFilter(updateList);
    }

    const download = (data, filename, contentType) => {
        const file = new Blob([new Uint8Array(data)], { type: contentType });
        saveAs(file, filename);
    };

    var item = Data[Math.floor(Math.random() * Data.length)];


    return (

        <div >
            {/* {console.log( )} */}
            {/* // home section starts    */}

            <section className="book-home container"  >

                <div className="row ">

                    <div className="content col-md-6">
                        <h5>{item.line}</h5>
                        <p>{item.author}</p>
                        <a href="/" className="btn btn-outline-light px-5">Buy Now</a>
                    </div>


                    <div className=' col-md-4 display-resp'>
                        <div className=' books-slider  book-slid-sow '>
                            {data.map(item => !(item.isDownloadable) && <a key={item._id} href={item.link} target='_blank' className="swiper-slide"><img src={item.thumbnail} alt="" /></a>)}
                        </div>
                        <img src={stand} className="stand" alt="" />
                    </div>
                </div>
            </section>


            <main>
                <div className="container-fluid bg-trasparent my-4 p-3" >

                   <div className='filterBtn m-2'>
                   <button className='btn btn-outline-dark filBtn' onClick={() => setFilter(data)} >All Books</button>
                    <button className='btn btn-outline-dark filBtn' onClick={() => filterProduct('BCA')} >BCA Books</button>
                    <button className='btn btn-outline-dark filBtn ' onClick={() => filterProduct('Programing')} >Programming Books</button>
                    <button className='btn btn-outline-dark filBtn' onClick={() => filterProduct('Self Help')} >Self Help</button>
                    <button className='btn btn-outline-dark filBtn ' onClick={() => filterProduct('Ethical Hacking')} >Ethical Hacking</button>
                    <button className='btn btn-outline-dark filBtn ' onClick={() => filterProduct('Free Book')} >Free Book</button>
                   </div>
                   
                    <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-4 g-3">
                        {(filter.length === 0) && data.map(item =>

                            <div className="col" key={item._id}>
                                <div className="card h-100 shadow-sm"> <img src={item.thumbnail} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="clearfix ">
                                            <h5 className=" fw-bold">{item.title}</h5>
                                            <p className="card-title"> <ShowMore text={item.description} /> </p>
                                            <div className="text-center "> {item.isDownloadable ? <button className='btn btn-success ' onClick={() => download(item.file.data.data, item.title, item.file.contentType)}>Download</button> : <a href={item.link} className="btn btn-primary">Buy Now</a>} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}
                        {filter.map(item =>

                            <div className="col" key={item._id}>
                                <div className="card h-100 shadow-sm"> <img src={item.thumbnail} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="clearfix ">
                                            <h5 className=" fw-bold">{item.title}</h5>
                                            <p className="card-title"> <ShowMore text={item.description} /> </p>
                                            <div className="text-center "> {item.isDownloadable ? <button className='btn btn-success ' onClick={() => download(item.file.data.data, item.title, item.file.contentType)}>Download</button> : <a href={item.link} className="btn btn-primary">Buy Now</a>} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>

                </div>
            </main>


        </div>
    )
}

export default Books
