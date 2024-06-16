import styles from './Header.module.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.div}>
      <img className={styles.img} src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-1/241293581_112240447842229_2093246637157387540_n.png?stp=dst-png_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H-PflGqWHhgQ7kNvgEwIlxr&_nc_ht=scontent-atl3-1.xx&oh=00_AYD8lWku8IrBU_j--Q1xyG5RlbDlVVbBucfBFjyjMy2XdA&oe=6672DED0" alt="Sol press logo" />

        <Link to="/"><h1 className={styles.h1}>The Sol Press Co.</h1></Link>
        <nav>
          <Link className={styles.nav} to="/menu">Menu</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;