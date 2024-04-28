import styles from './style.module.css'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Playlist from '../Playlist'
import FavoriteSongs from '../FavoriteSongs'
import Search from '../Search'
import ListSongs from '../ListSongs'

export default function Main() {

    return <div className={styles.main}>
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/favoriteSongs' element={<FavoriteSongs />}></Route>
            <Route path='/playlists' element={<Playlist/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
            <Route path='/playlists/playlist/:namePlaylist' element = {<ListSongs/>}></Route>
        </Routes>
        </div>
}
