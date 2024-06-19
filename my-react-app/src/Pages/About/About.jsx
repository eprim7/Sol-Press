import styles from './About.module.css';

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.h1}>About Us</h1>
                <p>We are a team of dedicated professionals...</p>
            </div>
            <div className={styles.cardsRow}>
                <div className={styles.smallCard}>
                    <h2 className={styles.h1}>Card 1</h2>
                    <p>Information for card 1...</p>
                </div>
                <div className={styles.smallCard}>
                    <h2 className={styles.h1}>Card 2</h2>
                    <p>Information for card 2...</p>
                </div>
                <div className={styles.smallCard}>
                    <h2 className={styles.h1}>Card 3</h2>
                    <p>Information for card 3...</p>
                </div>
            </div>
        </div>
    );
}

export default About;