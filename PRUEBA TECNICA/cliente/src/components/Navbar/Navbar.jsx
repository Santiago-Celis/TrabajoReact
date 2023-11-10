import React from 'react'
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
        <div className={styles.Nav}>
            <h1 className={styles.Titulo}>Demo Streaming</h1>
            <button className={styles.Trial}>Start your free trial</button>
            <li className={styles.LogIn}>Log in</li>
        </div>
        <div className={styles.gris}>
            <div className={styles.Indicador}>
                <h1 className={styles.TituloIndicador}>Texto ejemplo</h1>
            </div>
        </div>
    </>
  )
}

export default Navbar
