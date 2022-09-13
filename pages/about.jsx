import React from 'react'
import styles from "../styles/About.module.css";
import Image from 'next/image'
import ContactForm from '../components/Contact';

const about = () => {

  const text = "Mag ik mij even voorstellen? Mijn naam is Jurgen Van de Velde. Samen met Barbara hebben wij 2 dochters, Yanneke en Frauke. Al jaren is het mijn droom om iets op zelfstandige basis te beginnen, maar nooit kwam het zover... Maar kijk, na jaren van dromen is het nu eindelijk zover: VELJE broodjes- & saladebar is er!!! Daar iedereen mij in Burst en omstreken kent als 'de Velje', was de naam voor onze zaak snel gekozen!! Samen met mijn oudste dochter Yanneke sta ik van dinsdag tot zaterdag klaar om u te bedienen."
  const text2 = "Wat bieden wij aan? Naast dagverse belegde broodjes, bieden wij ook een saladebar aan. U heeft de mogelijkheid om zelf uw slaatje samen te stellen volgens uw wensen en voorkeuren. Verder kan u bij ons ook terecht voor vers gemaakte panini's, warme en koude snacks, zoetigheden... Maar ook voor gewoon een koffietje of iets fris bent u steeds van harte welkom!!!"

  return (
    <div className={styles.container}>
      <h1>Wie zijn wij?</h1>
      <Image src="/img/over_ons.jpg" alt="" width="600px" height="450px" objectFit='contain' />
      <p className={styles.text}>
        {text}
        <br />
        <br />
        {text2}
      </p>
      <div className={styles.formContainer}>
        <ContactForm />
      </div>
    </div>
  )
}

export default about