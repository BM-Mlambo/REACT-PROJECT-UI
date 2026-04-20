import "../styles/footer.css"
export default function Footer(){
    return(
        <footer id="footer">
            <div className="footer-container">
                <h3>NextGen solutions</h3>
                <p>Building modern digital solutions for the future</p>
                <ul className="footer-links">
                <li> <a href="#home">Home</a></li>
                <li> <a href="#about">About</a></li>
                 <li> <a href="#services">Services</a></li>
                 <li> <a href="#contact">Contact</a></li>

                </ul>
                <p className="copyright">&copy; 2026 NextGen solutions</p>
            </div>

        </footer>
    )
}