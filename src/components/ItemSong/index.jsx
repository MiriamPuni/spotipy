import React, { useContext, useState } from 'react'
import styles from './style.module.css'
import DataContext from '../../context/DataContext'

export default function ItemSong({song}) {
    const {setUrlSong} = useContext(DataContext)
    const{title, videoId, lengthText, thumbnail} = song
    const [isActive, setIsActive] = useState(JSON.parse(localStorage.getItem('favoriteSongs'))?JSON.parse(localStorage.getItem('favoriteSongs')).find((e)=>e.videoId == song.videoId)? true: false: false)
    
    const onClickFavorite = (e)=>{
      e.stopPropagation()
      if(!localStorage.getItem('favoriteSongs')){
        localStorage.setItem('favoriteSongs', JSON.stringify([]))
      }
      let old = JSON.parse(localStorage.getItem('favoriteSongs'))
      for (let i in old){
        if (old[i].videoId == song.videoId){
          old.splice(i, 1)
          localStorage.setItem('favoriteSongs', JSON.stringify(old))
          setIsActive(JSON.parse(localStorage.getItem('favoriteSongs')).find((e)=>e.videoId == song.videoId)? true: false)
          return 
        }
      }
      
      old.push(song)
      localStorage.setItem('favoriteSongs', JSON.stringify(old))
      setIsActive(JSON.parse(localStorage.getItem('favoriteSongs')).find((e)=>e.videoId == song.videoId)? true: false)
    }
  return <div  className={styles.itemSong} onClick={()=>setUrlSong('https://www.youtube.com/watch?v='+videoId)}>
    <p>{lengthText}</p>
    {(isActive)
    ?
    <i className="fa-solid fa-heart" onClick={onClickFavorite}></i>
    :
    <i className="fa-regular fa-heart" onClick={onClickFavorite}></i>
  }
    <p className = {styles.nameSongs}>{title}</p>
    <img  src={thumbnail[0].url} alt="" className={styles.img}/>

    </div>
}
