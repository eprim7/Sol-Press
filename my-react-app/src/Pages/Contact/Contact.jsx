import styles from './Contact.module.css';

function Contact() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>We&rsquo;d love to hear from you!</h1>
                <h3 className={styles.h3}>Whether you have questions, concerns, or recommendations, we&rsquo;re excited to answer any questions!</h3>
                <h3 className={styles.h3}>Please leave your name, email as well as your message so we can get back to you as soon as possible</h3>
                <div className={styles.contactContainer}>
                    <form action="https://api.web3forms.com/submit" method="POST" className={styles.contactLeft}>
                        <input type="hidden" name="access_key" value="d5527b7d-a100-4e99-98a0-58c1fba85dba" />
                        <input type="text" name="name" placeholder="Your Name" className={styles.contactInputs} required />
                        <input type="email" name="email" placeholder="Your Email" className={styles.contactInputs} required />
                        <textarea name="message" placeholder="Your Message" className={styles.contactInputs} required />
                        <button id="submit-btn" type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;