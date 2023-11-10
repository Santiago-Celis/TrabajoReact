import React from 'react'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>

    <div className={styles.main}>
        <div className={styles.Contenedor}>
          <div className={styles.Carta} >
            <a href="/Series" className={styles.LinkCarta}>SERIES</a>
          </div>
          <p className={styles.Texto}>Popular series</p>
        </div>

        <div className={styles.Contenedor}>
          <div className={styles.Carta}>
            <a href='/Movies' className={styles.LinkCarta}>MOVIES</a>

          </div>
          <p className={styles.Texto}>Popular Movies</p>
        </div>
      </div>
    </>
  )
}

export default HomePage
