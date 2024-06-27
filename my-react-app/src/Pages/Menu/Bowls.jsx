import styles from './menu.module.css';
import { Link } from 'react-router-dom';


function Bowls() {
    return(
        <>
            <h1 className={styles.h1}>Dive right into our delicious Smoothie Bowl options!</h1>
        <div className={styles.container}>
        <nav className={styles.nav}><Link to="/smoothie" className={styles.link}>Smoothies</Link></nav>
            <nav className={styles.nav}><Link to="/bowls" className={styles.link}>Bowls</Link></nav>
            <nav className={styles.nav}><Link to="/meals" className={styles.link}>Meals</Link></nav>
            <nav className={styles.nav}><Link to="/refreshers" className={styles.link}>Refreshers</Link></nav>
            <nav className={styles.nav}><Link to="/menu" className={styles.link}>Snacks</Link></nav>

        </div>


        
        
        </>
    );
}
export default Bowls