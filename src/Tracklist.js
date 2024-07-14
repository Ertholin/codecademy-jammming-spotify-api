import React from "react";
import styles from "./Tracklist.module.css"

const Tracklist = () => {
    return (
        <div className={styles.tracklist}>
            <h1>Results</h1>
            <hr />
            <h4>Song's title Song's title</h4>
            <p>Song's description</p>
        </div>
    )
}

export default Tracklist;