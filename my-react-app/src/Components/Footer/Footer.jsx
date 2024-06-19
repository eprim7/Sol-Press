import styles from './Footer.module.css';
import { FaPhoneAlt, FaFacebookSquare, FaInstagramSquare, FaInfoCircle, FaMapPin, FaCheckCircle } from "react-icons/fa";


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.outsideDiv}>
            <div className={styles.testimonials}>
                <h2 className={styles.h2}><FaInfoCircle className={styles.icons} />About Us</h2>
                <h3>Here at Sol Press Co. we are committed to serving healthy and nutritional foods and smoothies that will allow you to feel great.</h3>
            </div>
                <div className={styles.contactDiv}>
                    <h2 className={styles.h2}> <FaPhoneAlt className={styles.icons} />Contact Us</h2>
                    <p className={styles.contactP}> <a href="tel:+9312664788" className={styles.a}>(931) 266-4788</a></p>
                    <p className={styles.contactP}><a href='mailto:thesolpressco@gmail.com' className={styles.a}>thesolpressco@gmail.com</a></p>
                </div>
                <div className={styles.followDiv}>
                    <h2 className={styles.h2}> <FaCheckCircle className={styles.icons} />Follow Us</h2>
                    <a href="https://www.facebook.com/people/The-S%C5%8Dl-Press-Co/100072227610057/" className={styles.a}>
                        <FaFacebookSquare className={styles.socialMedia} />
                    </a>
                    <a href="https://www.instagram.com/thesolpressco/" className={styles.a}>
                        <FaInstagramSquare className={styles.socialMedia} />
                    </a>
                </div>
                <div className={styles.findUs}>
                    <h2 className={styles.h2}> <FaMapPin className={styles.icons}/>Find Us</h2>
                    <iframe className={styles.iframe}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.2932469616158!2d-87.23137818864969!3d36.522919083165604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864dfe39e081f0b%3A0xbd3a64c011a6bb44!2sThe%20S%C5%8Dl%20Press%20Co.!5e0!3m2!1sen!2sus!4v1718641721071!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}

export default Footer;