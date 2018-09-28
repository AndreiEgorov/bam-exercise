import banner from './../../assets/images/banner.jpg';
const styles = {
  bannerImage: {
    background: `url(${banner})`,
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
  },

  lifeBox: {
    width: '100%',
    height: 450,
    backgroundColor: '#1C1C25',
    display: 'flex',
    justifyContent: 'center',
  },
  lifeBoxTitle: {
    textTransform: 'uppercase',
    color: '#C9B078',
    fontSize: '1.4rem',
    letterSpacing: 4.69,
    marginBottom: 50,
    fontWeight: 400,
  },
  landmarkRobsonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  robsonBuildings: {
    height: '100vh',
    maxWidth: 650,
    width: '100%',
  },
  robsonTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: '5%',
  },
  intro: {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    fontWeight: 100,
  },
  robsonRealEstate: {
    width: 375,
    height: 101,
    marginBottom: '30px',
  },
  filmIntro: {
    fontWeight: 600,
    fontSize: '0.7rem',
    color: '#ceaf70',
    letterSpacing: '2.29px',
    textTransform: 'uppercase',
  },
};
export default styles;
