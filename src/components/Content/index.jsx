import styles from './style.module.css'
import Player from '../Player'
import Main from '../Main'
import NavBar from '../NavBar'
import { useState } from 'react'
import DataContext from '../../context/DataContext.jsx';
export default function Content() {
    const [urlSong, setUrlSong] = useState()
    const [favoriteSongs, setFavoriteSongs] = useState([])
  return <DataContext.Provider value={{urlSong, setUrlSong, favoriteSongs, setFavoriteSongs}}>
  <div className={styles.content}>
    <Player/>
    <Main/>
    <NavBar />
  </div>
  </DataContext.Provider>
}
