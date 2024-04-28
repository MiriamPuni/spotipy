import React, { useContext, useEffect } from 'react'
import styles from './style.module.css'
import ListSongs from '../ListSongs'

export default function FavoriteSongs() {
  let favoriteSongs = JSON.parse(localStorage.getItem('favoriteSongs'))
  useEffect(() => { favoriteSongs = JSON.parse(localStorage.getItem('favoriteSongs')) }, 
  [JSON.parse(localStorage.getItem('favoriteSongs'))])

  return <div className={styles.container}>
    {(favoriteSongs)
      ?
      <ListSongs listSongs={favoriteSongs} />
      :
      null}
  </div>
}
