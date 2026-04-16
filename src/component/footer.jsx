import "../styles/footer.css"
export default function Footer(){
    return(
        <footer id="footer">
            <div className="footer-container">
                <h3>NextGen solutions</h3>
                <p>Building modern digital solutions for the future</p>
                <ul className="footer-links">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contacts</li>

                </ul>
                <p className="copyright">&copy; 2026 NextGen solutions</p>
            </div>

        </footer>
    )
}