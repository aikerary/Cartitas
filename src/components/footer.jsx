// Import {h}
import { h } from "preact";
import "../css/footer.css";
export function Footer(){
    return (
        <footer className="footer">
            <div className="advice">
                This page was created by A.A.Ary
            </div>
            <div className="social">
                <a href="https://www.github.com/aikerary" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <span className="github"></span>
                </a>
                <a href="https://www.linkedin.com/in/aiker-acosta-cantillo-03422422b" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <span className="linkedin"></span>
                </a>
                <a href="https://aiker-cev.pages.dev/" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <span className="personal"></span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;