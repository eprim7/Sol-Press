import { Link } from 'react-router-dom';
import styles from './menu.module.css';

function Menu(){
    return(
       <>
       <h1 className={styles.h1}>Dive right into our delicious snack options!</h1>
        <div className={styles.container}>
            <nav className={styles.nav}><Link to="/smoothie" className={styles.link}>Smoothies</Link></nav>
            <nav className={styles.nav}><Link to="/bowls" className={styles.link}>Bowls</Link></nav>
            <nav className={styles.nav}><Link to="/meals" className={styles.link}>Meals</Link></nav>
            <nav className={styles.nav}><Link to="/refreshers" className={styles.link}>Refreshers</Link></nav>
            <nav className={styles.nav}><Link to="/menu" className={styles.link}>Snacks</Link></nav>
        </div>
        <div className={styles.snacks}>
            <div className={styles.item}>
                <h3 className={styles.title}>Chocolate chip cookies</h3>
            </div>
            <div className={styles.item}>
                <h3 className={styles.title}>Protein Balls</h3>
            </div>
            <div className={styles.item}>
                <h3 className={styles.title}>Other</h3>
            </div>
            <div className={styles.item}>
                <h3 className={styles.title}>other 2</h3>
            </div>
            <div className={styles.item}>
                <h3 className={styles.title}>Chocolate chip cookies 3</h3>
            </div>
            <div className={styles.item}>
                <h3 className={styles.title}>Chocolate chip cookies</h3>
            </div>
        </div>
       </>
    );
}

export default Menu;
