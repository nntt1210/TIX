import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.color.black.light,
    paddingTop: theme.spacing(3.75),
    paddingBottom: theme.spacing(3.75),
    paddingLeft: theme.spacing(1.25),
    paddingRight: theme.spacing(1.25),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(3.125),
      paddingBottom: theme.spacing(3.125),
    },
    '& a': {
      color: theme.color.gray.light,
    },
  },
  footerList: {
    '& a': {
      fontSize: '0.75rem',
    },
    margin: '1.875rem 0',
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: `1px solid ${theme.color.gray.light}`,
    '& > li': {
      paddingLeft: 0,
      paddingRight: '0.75rem',
      width: '50%',
      [theme.breakpoints.up('md')]: {
        width: 'calc(100% / 3)',
      },
      [theme.breakpoints.up('lg')]: {
        width: 'calc(100% / 4)',
      },
    },
  },
  footerBottom: {
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& img': {
      width: '100%',
      maxWidth: '5rem',
      textAlign: 'center',
    },
    '& span': {
      display: 'block',
      color: theme.color.gray.light,
      fontSize: '0.75rem',
      marginBottom: '0.25rem',

      '&:first-child': {
        color: theme.color.white.main,
      },

      '& a': {
        display: 'inline',
        color: theme.color.red.main,
        fontSize: '0.75rem',
      },
    },
    footerBCT: {
      maxWidth: '100%',
    },
  },
}));
export default useStyles;
