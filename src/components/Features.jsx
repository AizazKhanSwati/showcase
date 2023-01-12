import React from 'react'
import assets from '../assets'
import styles from '../styles/Global'


const FeatureCard =  ({iconUrl, icontext}) => (
  <div className={styles.featureCard}>
  <img src={iconUrl} alt="icon" className={styles.featureImg} />
  <p className={styles.featureText}>{icontext}</p>
  </div>
)

const Features = () => {
  return (
    <div 
    className={`${styles.section}
    ${styles.bgPrimary} 
    banner03
    `}>
    <div className={`${styles.subSection} 
    flex-col text-center
    `}>
      <div>
        <h1 className={`${styles.h1Text}  ${styles.whiteText}`}>Technologies</h1>
        <p>ProNef has been devloped using a cross-platform Technology, React Native.</p>
      </div>

      <div className={styles.flexWrap}>
        <FeatureCard
          iconUrl={assets.react}
          icontext= "React native"
        />
        <FeatureCard
          iconUrl={assets.javascript}
          icontext= "JavaScript"
        />
      </div>

    </div>

    </div>
  )
}

export default Features