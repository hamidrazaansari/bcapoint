import { useState } from "react"
import React  from 'react'
import { toast, ToastContainer } from 'react-toastify';

function ContactUs() {

    const [UserData , SetUerData] = useState({
        name: "",
        email: "",
        message: "",
    })

    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        SetUerData({  ...UserData, [name]:value})
    }
const submitData =  async(e) => {
  e.preventDefault();

const { name , email  , message} = UserData;

if( name && email  && message){
   const res =  fetch("https://bcapoints-default-rtdb.firebaseio.com/:userRecord.json",{
   method: "POST",
   headers:{
    "Content-Type": "application/json",
   },
   body : JSON.stringify({

    name , email , message

   }),
})
 
if(res){

    SetUerData({
        name: "",
        email: "",
        message: "",  
    })
    toast.success("data submited succesfully!")
    
}
else{
    toast.error("invalid ! Fill all the Filled")
}
}
else{
    toast.error("invalid ! Fill all the Filled")  
}

}
    
  return (
    <div className='contact px-3'>
        <div className="container">
            <ToastContainer />
<section className="mb-4">

    <h1 className="h1-responsive font-weight-bold text-center my-4 text-white">Contact us</h1>
   

    <div className="row">

        <div className="col-md-9 mb-md-0 mb-5 form-box">

            <h1 className="text-center fs-2 mb-4-">Say hello! </h1>
            <form id="contact-form" name="contact-form"  method="POST">

            <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control" value = {UserData.subject} onChange = {postUserData}/>
                            <label htmlFor="subject" className="">Your Name</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control" value = {UserData.subject} onChange = {postUserData}/>
                            <label htmlFor="subject" className="">Your email</label>
                        </div>
                    </div>
                </div>

                <div className="row resp-row">

                    <div className="col-md-12">

                        <div className="md-form">
                            <input type="text" id="message" name="message" rows="2" className="form-control md-textarea" value = {UserData.message} onChange = {postUserData}></input>
                            <label htmlFor="message">Your message</label>
                        </div>

                    </div>
                </div>
                

            </form>

            <div className="text-center text-md-left mt-3">
                <button className="btn btn-primary"  onClick={submitData}><i className="fa fa-paper-plane" aria-hidden="true"></i> Send</button>
            </div>
            <div className="status"></div>
        </div>
        
        <div className="col-md-3 text-center contact-loc">
        <p className="text-center w-responsive mx-auto mb-5 text-white ">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
            <ul className="list-unstyled mb-0 primary ">

                <li><i className="fas fa-map-marker-alt fa-2x "></i>
                    <p> Gorakhpur , Uttar Pardsh, India</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 91 639-369-6613</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@BCApoints.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>
            
        </div>
      
    </div>
  )
}

export default ContactUs
