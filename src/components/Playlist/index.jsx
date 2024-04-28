import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import ListSongs from '../ListSongs';
import axios from 'axios';
import CreatePlaylist from '../CreatePlaylist';
import { useNavigate } from 'react-router-dom';

export default function Playlist() {

  //   const [playlist, setPlaylist] = useState([])
  //   const options = {
  //       method: 'GET',
  //       url: 'https://yt-api.p.rapidapi.com/search',
  //       params: {query: 'yuval dayan'},
  //       headers: {
  //         'X-RapidAPI-Key': 'eebdd18be7msh1dd72ce30f7024dp175176jsnf2cb68a9d65a',
  //         'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  //       }
  //     };
  //     useEffect(()=>{
  //       axios.request(options)
  //       .then(re => setPlaylist(re.data.data))
  //     }, [])


  // return <div className={styles.container}>
  //   <ListSongs listSongs={playlist}/>
  //   </div>
  const [folders, setFolders] = useState([])
  // TO DO להביא מהשרת את כל התיקיות הקיימות
  const [createPl, setCreatePl] = useState(false)
  const nav = useNavigate()
  const createPlaylist = () => {
    setCreatePl(true)
   }
  return <div className={styles.container}>
    {(createPl)
    ?
    <CreatePlaylist setFolders = {setFolders} setCreatePl = {setCreatePl}/>
    :
    null}
    <button className={`${styles.buttomcreatePlaylist} ${createPl ? styles.buttomcreatePlaylistisActive : ''}`} onClick={createPlaylist}>create playlist</button>
    <div className={styles.folders}>
      {folders.map(f=> {
      return <button onClick={()=>nav(`playlist/${f}`)} key={f} className={styles.folder}><div className={styles.icon}> <i className="fa-solid fa-music"></i></div>
      {f}</button>
      })}
    </div>
  </div>
}
