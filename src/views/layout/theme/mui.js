import { createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors'

const muiTheme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 14,
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

export default muiTheme;
