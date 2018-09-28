const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '100px 0 50px',
    padding: '0 50px',
    alignItems: 'left',
    borderTop: '1px solid hsla(0,0%,100%,.2)',
  },
  text: {
    order: 1,
    fontWeight: 200,
    fontSize: '0.8rem',
    color: '#cacaca',
    letterSpacing: '.16px',
    lineHeight: '19px',
    margin: '30px 0 50px',
    maxWidth: '60%',
    alignText: 'left',
  },
  infoContainer: {
    order: 2,
    color: '#C9B078',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    letterSpacing: 1,
    fontWeight: 100,
    marginBottom: 50,
  },

  addressInfo: {
    display: 'inline',
    textTransform: 'uppercase',
    color: '#C9B078',
    textDecoration: 'none',
    fontWeight: 600,
  },

  breaker: {
    margin: '0px 5px',
  },

  emailInfo: {
    display: 'inline',
    textTransform: 'uppercase',
    color: '#C9B078',
    textDecoration: 'none',
    fontWeight: 100,
  },

  author: {
    order: 3,
    color: '#cacaca',
    textTransform: 'uppercase',
    width: '50%',
    display: 'inline',

    margin: 0,
  },

  imageWrapper: {
    order: 4,
    display: 'flex',

    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '50%',
    alignSelf: 'flex-end',

    position: 'relative',
    bottom: '36px',
  },

  asiaLogo: {
    width: 73,
    height: 'auto',
    marginRight: 30,
  },
  magnumLogo: {
    width: 85,
    height: 'auto',
    marginRight: 10,
  },
};
export default styles;
