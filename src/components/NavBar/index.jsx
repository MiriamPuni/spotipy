import { NavLink } from 'react-router-dom'
import styles from './style.module.css'
export default function NavBar() {
  const functionClassName = ({isActive}) => isActive? `${styles.active} ${styles.button}`: styles.button 
  return <div className={styles.navBar}>
    <NavLink to={'/home'} className={functionClassName}><div className={styles.i}><i className="fa-solid fa-house"></i></div> HOME</NavLink>
    <NavLink className = {functionClassName} to={'/favoriteSongs'}> <div className={styles.i}><i className="fa-solid fa-heart"></i></div> FAVORITE</NavLink>
    <NavLink className = {functionClassName} to={'/playlists'}> <div className={styles.i}><i className="fa-solid fa-folder"></i></div> MY PLAYLISTS</NavLink>
    <NavLink className = {functionClassName} to={'/search'}> <div className={styles.i}><i className="fa-solid fa-magnifying-glass"></i></div> SEARCH</NavLink>
    </div>
}
