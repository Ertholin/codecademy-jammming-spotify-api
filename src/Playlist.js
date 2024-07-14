import React from "react";
import styles from "./Playlist.module.css"

const Playlist = () => {
    return (
        <div className={styles.playlist}>
            <input type="text" />
            <hr />
            <h4>Song's title Song's title</h4>
            <p>Song's description</p>
            <button className={styles.button_save} type="submit">Save to Spotify</button>
        </div>
    )
}

export default Playlist;