import React, { Component } from 'react';

import mainLogo from '../../assets/logo/mainLogo.svg';
import styles from './styles';
import Menu from './Menu';
import AsiaStandard from '../../assets/logo/asia-standard.png';
import Magnum from '../../assets/logo/magnum.png';
class Header extends Component {
  state = {
    isActive: false,
  };

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <div style={styles.headerContainer}>
        {this.state.isActive && (
          <div style={styles.menuContents}>
            <div style={styles.listContainer}>
              <ul style={styles.list}>
                <li style={styles.listItem}> Home </li>
                <li style={styles.listItem}> Only One Robson </li>
                <li style={styles.listItem}> 270° Views </li>
                <li style={styles.listItem}> Refined Residences </li>
                <li style={styles.listItem}> Club Robson, Lifestyle </li>
                <li style={styles.listItem}> Concierge Services</li>
                <li style={styles.listItem}>Award-Winning Team </li>
                <li style={styles.listItem}> Media </li>
                <li style={styles.listItem}> Register </li>
                <li style={styles.listItem}> Contact</li>
              </ul>
            </div>
            <div style={styles.infoContainer}>
              <div>
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
              <div style={styles.imageContainer}>
                <img style={styles.asiaLogo} src={AsiaStandard} alt="Asia Standard Logo" />
                <img style={styles.magnumLogo} src={Magnum} alt="Asia Standard Logo" />
              </div>
            </div>
          </div>
        )}

        <div style={styles.navigation}>
          <img src={mainLogo} alt="Landmark on Robson Logo" />
          <div style={styles.options}>
            <a>
              <p>EN</p>
            </a>
            <a>
              <p>繁體 </p>
            </a>
            <a>
              <p>简体 </p>
            </a>
            <a>
              <p>Register</p>
            </a>
          </div>

          <Menu
            toggleButton={this.toggleButton}
            isActive={this.state.isActive}
          />
        </div>
      </div>
    );
  }
}

export default Header;
