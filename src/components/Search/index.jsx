import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import ListSongs from '../ListSongs'
import axios from 'axios'

export default function Search() {

    const [result, setresult] = useState([])
    const [search, setSearch] = useState()

    const functionSearch = (e) => {
        setSearch(e.target.value)
    }

    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/search',
        params: { query: search },
        headers: {
            'X-RapidAPI-Key': 'eebdd18be7msh1dd72ce30f7024dp175176jsnf2cb68a9d65a',
            'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
        }
    };
    useEffect(() => {
        console.log('🐱🐱');
        if (search){
            axios.request(options)
                .then(re => setresult(re.data.data))
        }
    }, [search])

    return <div className={styles.container}>
        <form className={styles.form}>
            <label> search
                <input className={styles.input} type="text" onChange={functionSearch} />
            </label>
        </form>

            {(search)
            ?
            (result)
                ?
                <ListSongs listSongs={result} />
                :
                <p className={styles.text}>לא נמצאו תוצאות</p>
            :
            <p className={styles.text}>חפש שירים!</p>
            }
    </div>
}
