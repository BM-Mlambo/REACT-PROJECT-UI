import "../styles/about.css"
export default function About(){
    return(
        <section id="about">
            <h2 className="title">About Us</h2>
            <p className="subTitle">At NextGen solutions,we are passionate about building innovative
                digital solutions that help bussinesses grow and succeed.
            </p>
            <div className="about-cards">
                <div className="card">
                    <h3>Our Mission</h3>
                    <p>To deliver high quality digital products that solve real world problems
                        and create meaningful impact.
                    </p>

                </div>
                <div className="card">
                    <h3>Our Vision</h3>
                    <p>To become a leading technology campany known for innovation,excellence and customer satisfaction</p>
                </div>
                <div className="card">
                    <h3>Our Values</h3>
                    <p>We believe in Integrity,Creativity, Colaboration, and continous improvement in everything we do.</p>
                </div>

            </div>

        </section>
    )
}