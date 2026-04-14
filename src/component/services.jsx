import "../styles/services.css"
export default function Services(){
    return(
        <section id="services">
            <div className="container">
                <div className="services-image">
                    <img src="https://plus.unsplash.com/premium_photo-1682141002094-668233a72d60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaCUyMHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww" alt="team working" />

                </div>
                <div className="services-content">
                    <h2>Our Services</h2>
                    <div className="services-card">
                        <h3>Web development</h3>
                        <p>We build fast,responsive and modern website tailored to your business need</p>
                    </div>
                    <div className="services-card">
                        <h3>UI/UX Design</h3>
                        <p>We create beautiful and user friendly designes that enhance user experience</p>
                    </div>
                    <div className="services-card">
                        <h3>Consulting</h3>
                        <p>We provide expert advise to help you make the right technology decision.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}