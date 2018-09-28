import React from 'react';
import styles from './styles';
import life from '../../assets/logo/life.svg';
import twoTallBuildings from '../../assets/images/twoTallBuildings.jpg';
import LandmarkWhite from '../../assets/logo/landmark-white.svg';
import { Parallax } from 'react-scroll-parallax';

const MainSection = () => {
  return (
    <div>
      <div style={styles.bannerImage} />

      <div style={styles.lifeBox}>

<svg width="364px" height="190px" viewBox="0 0 364 190" version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    xlink="http://www.w3.org/1999/xlink">
    <g id="HOME" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-538.000000, -1110.000000)" id="LIFE" fill="#FFFFFF">
            <g transform="translate(538.000000, 1110.000000)">
                <polygon id="L" points="52.44 83.28 2.4 83.28 2.4 0 0 0 0 85.68 52.44 85.68" style={{transform: "matrix(1, 0, 0, 1, 0, 9.15)"}}></polygon>
                <polygon id="I" points="116.010001 104 116.010001 189.68 118.410001 189.68 118.410001 104" style={{transform: "matrix(1, 0, 0, 1, 0, 0)"}}></polygon>
                <polygon id="F" points="192.060002 94.84 192.060002 57.4 242.460002 57.4 242.460002 55 189.660002 55 189.660002 140.68 192.060002 140.68 192.060002 97.24 237.660002 97.24 237.660002 94.84" style={{transform: "matrix(1, 0, 0, 1, 0, -1.54375)"}}></polygon>
                <polygon id="E" points="308.070003 97.28 308.070003 56.24 359.310003 56.24 359.310003 53.84 308.070003 53.84 308.070003 16.4 362.550003 16.4 362.550003 14 305.670003 14 305.670003 99.68 363.030003 99.68 363.030003 97.28" style={{transform: "matrix(1, 0, 0, 1, 0, -0.6375)"}}></polygon>
            </g>
        </g>
    </g>
</svg>





      </div>
      <div style={styles.landmarkRobsonContainer}>
        <Parallax
          className="custom-class"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
        >
          <img
            src={twoTallBuildings}
            alt="Two Buildings"
            style={styles.robsonBuildings}
          />
        </Parallax>
        <div style={styles.robsonTitle}>
          <Parallax
            className="custom-class"
            offsetYMax={10}
            offsetYMin={-10}
            slowerScrollRate={false}
          >
            <p style={styles.intro}>This is</p>
            <img
              src={LandmarkWhite}
              alt="Landmark white logo"
              style={styles.robsonRealEstate}
            />
            <p style={styles.filmIntro}>Watch the film ►</p>
          </Parallax>
        </div>
      </div>
      <div style={styles.bannerTwo} />
    </div>
  );
};

export default MainSection;
