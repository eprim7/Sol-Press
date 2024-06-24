import styles from './About.module.css';

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.h1}>About Us</h1>
                <p className={styles.p}>Here at The Sol Press Co, we blend the best of health, community, and tradition into every smoothie we serve. As a locally and veteran-owned business, we are dedicated to providing our community with delicious, nutritious, and refreshing smoothies made from the freshest local ingredients.</p>
            </div>
            <div className={styles.cardsRow}>
                <div className={styles.smallCard}>
                    <h2 className={styles.h1}>Our Story</h2>
                    <p className={styles.p}>Founded in 2020, our journey began with a passion for healthy living and a deep connection to our local roots. After serving our country, we wanted to create a business that not only promotes wellness but also gives back to the community that has supported us. Thus, The Sol Press Co. was born.</p>
                </div>
                <div className={styles.smallCard}>
                    <h2 className={styles.h1}>Mission Statement</h2>
                    <p className={styles.p}>Our mission is simple: to provide our customers with the highest quality smoothies while supporting local farmers and promoting a healthy lifestyle. We believe in the power of fresh ingredients and the importance of giving back.</p>
                </div>
                <div className={styles.smallCard}>
                    <h2 className={styles.h1}>Veteran-Owned and Proud</h2>
                    <p className={styles.p}>As proud veterans, we bring the values of dedication, hard work, and integrity to everything we do. Our military background instills in us a commitment to excellence and a desire to serve our community. We actively support veteran initiatives and strive to be a business that veterans can be proud of.</p>
                </div>
            </div>
        </div>
    );
}

export default About;