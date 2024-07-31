import React from "react";
import styles from "./Tracklist.module.css"

const Tracklist = () => {
    return (
        <div className={styles.tracklist}>
            <h1>Results</h1>

            <table>
                <tr>
                    <td>
                        <h3>Note that the development build is not optimized.</h3>
                        <p>Description of the music</p>
                    </td>
                    <td>
                    <button type="button" className={styles.button_add}>+</button>
                    </td>
                </tr>


                <tr>
                    <td>
                        <h3>Note that the development build is not optimized.</h3>
                        <p>Description of the music</p>
                    </td>
                    <td>
                    <button type="button" className={styles.button_add}>+</button>
                    </td>
                </tr>
                

            </table>
        </div>
    )
}

export default Tracklist;