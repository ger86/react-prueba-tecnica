import {createMuiTheme} from '@material-ui/core/styles';

const headingColor = '#2A2A2D';

const grey300 = '#e0e0e0';
const grey600 = '#646079';
const red = '#e32d38';
const black = '#25282a';
const pink = '#cb269f';

export default createMuiTheme({
  border: {
    light: '1px solid #F0F0F0',
    default: '1px solid #E5E5E7'
  },
  palette: {
    primary: {
      main: red
    },
    secondary: {
      light: black,
      main: black
    },
    pink: {
      main: pink
    },
    text: {
      primary: '#595c68',
      secondary: headingColor
    },
    grey: {
      300: grey300,
      400: '#dbd9e8',
      600: grey600
    }
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    gutterBottom: '1rem',
    bodySmall: {
      fontSize: '0.875rem'
    },
    body1: {
      fontSize: '1rem'
    },
    body2: {
      fontSize: '1rem'
    },
    h1: {
      fontSize: '2rem',
      fontWeight: '700',
      color: headingColor
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: headingColor
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: headingColor
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: headingColor
    },
    button: {
      textTransform: 'none'
    }
  },
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: '.5rem'
      }
    },
    MuiCssBaseline: {
      '@global': {
        a: {
          color: '#595c68'
        }
      }
    }
  }
});
