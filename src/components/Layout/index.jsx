import styles from './style.module.css'
import Header from '../Header'
import Content from '../Content'

export default function Layout() {
      return<div className={styles.layout}>
    <Header />
    <Content />
  </div>
}
