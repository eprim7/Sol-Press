import styles from './Footer.module.css'

function Footer(){
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.div}>
                <h1 className={styles.h1}>Sol Press</h1>
                <p className={styles.p}>Contact us: (931) 266-4788</p>
                <p className={styles.p}>Hours of Operation:</p>
                <p className={styles.p}>Monday-Friday: 7am-7pm</p>
                <p className={styles.p}>Saturday: 9am-7pm</p>
                <p className={styles.p}>Sunday: 10am-7pm</p>

            </div>
        </footer>
        </>
    );
}

export default Footer