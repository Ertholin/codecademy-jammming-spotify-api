import React from "react";
import styles from "./Playlist.module.css"

const Playlist = () => {
    return (
        <div className={styles.playlist}>
            <input type="text" />
            <hr />
            <button className={styles.button_save} type="submit">Save to Spotify</button>
        </div>
    )
}

export default Playlist;