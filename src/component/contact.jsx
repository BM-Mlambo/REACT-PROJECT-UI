import "../styles/contact.css"
export default function Contact(){
    return(
        <section id="contact">
            <div className="contact-container">
                <h2>Get in touch</h2>
                <p>We'd love to here from you.Fill out the form below and will get back to you.</p>
                <form>
                    <input type="text" placeholder="your name" />
                    <input type="email" placeholder="your email" />
                    <textarea placeholder="your message"></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </section>
    )
}