import "../styles/home.css"




export default function Home() {
    return (
        <section id="home">
            <div className="home-content">
                <h1>Transforming Ideas Into <span>Powerfull Digital Products</span> </h1>
                <p>We help bussinesses build mordern, scalable and user friendly digital solutions that drives growth and innovation.</p>
                <div className="buttons">
                    <button className="primary-btn"> Get Started</button>
                    <button className="secondary-btn">Learn more</button>

                </div>

            </div>
            <div className="home-image">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaCUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D" alt="img"  />

            </div>

        </section>
    )
}