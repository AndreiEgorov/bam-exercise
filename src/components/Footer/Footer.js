import React from 'react';
import AsiaStandard from '../../assets/logo/asia-standard.png';
import Magnum from '../../assets/logo/magnum.png';
import styles from './styles';
const Footer = () => {
  return (
    <div style={styles.root}>
      <p style={styles.text}>
        The Developer reserves the right in its sole discretion to make
        modifications or changes to the building design, floor plans, project
        designs, layouts, specifications, materials, finishes, features and
        dimensions without prior notice. All imagery including renderings and
        photographs are representational only and may not be accurate.
        Dimensions, sizes and square footages are approximate. Actual final
        dimensions, sizes, and square footages following completion of
        construction may vary from those set out herein. E. & O. E.
      </p>

      <div style={styles.infoContainer}>
        <a
          style={styles.addressInfo}
          href="https://www.google.ca/maps/place/1400+Robson+St,+Vancouver,+BC+V6G+1B9/@49.2880923,-123.1329423,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718773f2f537:0xc8ade08187e406ce!8m2!3d49.2880923!4d-123.1307536"
        >
          <span> 1400 Robson St. Vancouver, BC</span>
        </a>
        <div style={styles.contactInfo}>
          <span>604 566 2288 </span> <span style={styles.breaker}> | </span>
          <a style={styles.emailInfo} href="mailto:info@landmarkonrobson.com">
            <span> INFO@LANDMARKONROBSON.COM</span>
          </a>
        </div>
      </div>

      <p style={styles.author}> Website by Andrei</p>

      <div style={styles.imageWrapper}>
        <img
          src={AsiaStandard}
          alt="Asia Standard Logo"
          style={styles.asiaLogo}
        />
        <img src={Magnum} alt="Asia Standard Logo" style={styles.magnumLogo} />
      </div>
    </div>
  );
};

export default Footer;
