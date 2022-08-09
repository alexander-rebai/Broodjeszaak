import React from 'react'
import styles from "../styles/About.module.css";
import Image from 'next/image'

const about = () => {
  return (
    <div className={styles.container}>
      <h1>Wie zijn wij?</h1>
      <Image src="/img/about_img.jpg" alt="" width="600px" height="450px" />
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur quaerat voluptas ipsum tempora facere temporibus quisquam voluptatem possimus minus cumque dignissimos, eligendi reiciendis illum amet ex, hic voluptatibus excepturi.
      </p>
    </div>
  )
}

export default about