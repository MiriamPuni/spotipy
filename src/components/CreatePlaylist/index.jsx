import React from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
export default function CreatePlaylist({setFolders,setCreatePl}) {
  const nav = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    if( e.target[0].value){
      setFolders(old =>[...old , e.target[0].value ])
      setCreatePl(false)
    }
    // TO DO = להכניס את התיקייה החדשה לשרת
  }
  const addSongs = ()=>{nav('/search',{relative:"path"}) //TO DO 
}
  // return <div className={styles.container} onClick={()=>setCreatePl(false)}>
  return <div className={styles.container} onClick={()=>{setCreatePl(false)}} >
      <>
        <div className={styles.createPlaylist} onClick={(e)=>{e.stopPropagation()}}>
          <button className={styles.buttonX} onClick={()=>{setCreatePl(false)}}><i className="fa-solid fa-xmark" ></i></button>
          <h3>create new playlist</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
              <input className={styles.input} type="text" id='nameFolder' placeholder='name of folder' />
            <button className={styles.button} type='submit'>create</button>
            <button onClick={addSongs} className={styles.buttonAdd} type='submit'>create and add songs</button>
          </form>
        </div>
      </>
  </div>
}
