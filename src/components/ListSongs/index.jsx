import React from 'react'
import styles from './style.module.css'
import ItemSong from '../ItemSong'
import { useParams } from 'react-router-dom'
export default function ListSongs({listSongs}) {
  if(!listSongs) {
    listSongs = useParams().namePlaylist
  }
  // TO DO להביא את שם התיקייה מהקישור. 
  // ולהביא את תוכן התיקייה מהשרת ולהכניס למשתנה
  return <div className={styles.listSongs}>
    {/* <h1>{listSongs}</h1> */}
        {listSongs.filter(e=> e.type  == 'video').map(s => <ItemSong key={s.videoId} song = {s}/>)}
    </div>
}
