import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = ({closeModal}) => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      // ------Enter your web3forms access key below-------
      
      formData.append("access_key", "bfb19bbe-72cb-44d1-af59-3f1a589aeeac");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        toast.success("Message sent successfully!")
        setResult(res.message);
        event.target.reset();

        setTimeout(() => {
        if (closeModal) closeModal();
        }, 5000);
      } else {
        console.log("Error", res);
        toast.error("Something went wrong!")
        setResult(res.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Do youn have any project or Query ? Connect with us for projects, queries, and expert guidance. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />info@creativedecorshpl.com</li>
            <li><img src={phone_icon} alt="" />+91 7777 007 360 / 8106 910 653</li>
            <li><img src={location_icon} alt="" />8-1-423/3/A Laxmi Teja Colony, Shaikpet<br/> Hyderabad, Telangana - 500081.</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Your from</label>
            <input type="text" name='your from' placeholder='Enter your place' required/>
            <label>Company name</label>
            <input type="text" name='company name' placeholder='Enter your company name' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="5" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn' >Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  )
}

export default Contact
