const styles = {
  headerContainer: {
    fontFamily: 'Helvetica-Neue,Helvetica,Arial,sans-serif',
  },
  navigation: {
    padding: '0px 50px',
    width: 'calc(100%)',
    height: '120px',
    zIndex: 101,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundImage:
      'linear-gradient(180deg, rgba(0,0,0,.7),rgba(0,0,0,.7)1%, rgba(0,0,0,.5) 61%, transparent)',
      alignItems: "center"
  },

  options: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 300,
    fontSize: '1.2rem',
    letterSpacing: 2.29,
    position: 'relative',
    marginLeft: "50%",
    opacity: 0.9,
  },

  menuContents: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    zIndex: 100,
  },
  listContainer: {
    color: 'white',
    marginTop: '20vh',
    fontSize: '1.5rem',
  },
  list: {
    paddingLeft: 50,
  },
  listItem: {
    fontWeight: 'lighter',
    listStyleType: 'none',
    marginBottom: 17.5,
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px 50px',
    maxWidth: 'calc(100%)',
    marginTop: '15vh',
  },
  addressInfo: {
    display: 'inline',
    textTransform: 'uppercase',
    color: '#C9B078',
    textDecoration: 'none',
  },
  contactInfo: {
    display: 'flex',
    color: '#C9B078',
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
  asiaLogo: {
    width: 73,
    margin: '0px 15px',
  },
  magnumLogo: {
    width: 85,
    margin: '0px 15px',
  },
};

export default styles;
