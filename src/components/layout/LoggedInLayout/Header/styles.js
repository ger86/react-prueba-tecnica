import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '85px',
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    marginBottom: theme.spacing(6)
  },
  rightMenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > *': {
      marginLeft: theme.spacing(6)
    }
  },
  navLink: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.grey[600],
    '&.active .MuiTypography-root': {
      fontWeight: 'bold',
      color: theme.palette.primary.main
    }
  }
}));
