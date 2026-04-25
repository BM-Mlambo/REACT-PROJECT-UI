import "../styles/contact.css"
import { useState } from "react"
export default function Contact(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[message,setMessage]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Form submitted")
        setName("")
        setEmail("")
        setMessage("")
    }
    return(
        <section id="contact">
            <div className="contact-container">
                <h2>Get in touch</h2>
                <p>We'd love to here from you.Fill out the form below and will get back to you.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                     placeholder="your name"
                     value={name}
                     onChange={(e)=>setName(e.target.value)}

                     />
                    <input type="email"
                     placeholder="your email"
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     
                     />
                    <textarea placeholder="your message"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    
                    ></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </section>
    )
}