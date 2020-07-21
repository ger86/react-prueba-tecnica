import {styled} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export const Container = styled(Grid)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const ContentWrapper = styled('div')((props) => ({
  width: '100%',
  padding: props.theme.spacing(4),
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: props.theme.shadows[1],

  [props.theme.breakpoints.up('md')]: {
    width: props.theme.breakpoints.width('md')
  },

  [props.theme.breakpoints.up('lg')]: {
    width: props.theme.breakpoints.width('lg')
  },

  [props.theme.breakpoints.up('xl')]: {
    width: props.theme.breakpoints.width('xl')
  }
}));
