import styles from './Footer.module.css'


function Footer(){
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.outsideDiv}>
                <div className={styles.contactDiv}>
                    <h2 className={styles.contactH2}>Contact Us</h2>
                    <p className={styles.contactP}>123 Main Street, Anytown, USA</p>
                    <p className={styles.contactP}>Phone: (123) 456-7890</p>
                    <p className={styles.contactP}>Email: info@example.com</p>
                </div>
                <div className={styles.followDiv}>
                    <h2 className={styles.contactH2}>Follow Us</h2>
                    <a href="https://www.facebook.com/people/The-S%C5%8Dl-Press-Co/100072227610057/" className={styles.a}>Facebook</a>
                    <br />
                    <a hrefLang='https://www.instagram.com/thesolpressco/' className={styles.a}>Instagram</a>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer