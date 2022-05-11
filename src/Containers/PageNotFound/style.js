import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '40px 0',
    background: '#fff',
    fontWeight: 'bolder',
    '& img': {
      width: '100%',
    },
  },
  background: {
    backgroundImage:
      'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
    height: '400px',
    backgroundPosition: 'center',
    '& h1': {
      fontSize: '80px',
    },
    '& h3': {
      fontSize: '80px',
    },
  },
  goHome: {
    color: '#fff',
    padding: '10px 20px',
    background: '#39ac31',
    margin: '20px 0',
    display: 'inline-block',
    borderRadius: '2rem',
  },
}));

export default useStyles;
