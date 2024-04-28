import React, { useContext, useState } from 'react'
import styles from './style.module.css'
import ReactPlayer from 'react-player'
import DataContext from '../../context/DataContext'

export default function Player() {
  const {urlSong} = useContext(DataContext)
  const [play, setPlay] = useState(true)
  const [changeVolume, setChangeVolume] = useState(false)
  const[volume, setVolume] = useState(1)
  function playOrPause() {
    setPlay(play ? false : true)
  }
  function funcVoluem(e){
    console.log(e.target.value);
    setVolume(e.target.value)
  }
  // let urlSong = 'https://www.youtube.com/watch?v=ZPxw2vWXxNE&list=RDZPxw2vWXxNE&start_radio=1'
  return <div className={styles.player}>
    <ReactPlayer
      url={urlSong}
      width={'100%'}
      height={'40%'}
      playing={play}
      // light={true}
      // loop = {true}
      volume={volume}
    />
    <div className={styles.menuPlayer}>
      <div className={styles.seek}></div>
      <div className={styles.buttonPlayer}>


        <div className={styles.icon }> <i className="fa-solid fa-backward-fast"></i>  </div>
        <div className={styles.icon} onClick={playOrPause}>
        {(play)
          ?
           <i className="fa-solid fa-pause"></i> 
          :
          <i className="fa-solid fa-play"></i>
        }
        </div>
        <div className={styles.icon}>  <i className="fa-solid fa-forward-fast"></i> </div>
        <div className={styles.icon} onMouseOver={()=>{setChangeVolume(true)}} onMouseOut={()=>{setChangeVolume(false)}}>
           {(changeVolume)
           ?
           <div className={styles.containerInputVolume}>
           <input className={styles.inputVolume} type="range" max={1} min={0} step={0.1}  onChange={(e)=>funcVoluem(e)} />
            <i className="fa-solid fa-volume-high"></i> 
           </div>
           :
           <i className="fa-solid fa-volume-xmark"></i>
          }
           </div>
        <div className={styles.icon}> <i className="fa-solid fa-angles-left"></i>  </div>
        <div className={styles.icon}>  <i className="fa-solid fa-angles-right"></i> </div>
        <div className={styles.icon}> <i className="fa-solid fa-maximize"></i>  </div>


        {/* <div className={styles.icon}>   </div> */}
        {/* להדליק לכבות
        זמן - כמה עבר מתוך כמה
        ווליום
        להעביר 30 שניות אחורה וקדימה
        מהירות הפעלה
        מסך מלא 
        לעבור לשיר הבא/הקודם*/}

      </div>
    </div>
  </div>
}