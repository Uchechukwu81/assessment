import { createTheme } from '@mui/material/styles';
// import {grey} from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0846AF',
      contrastText: '#ffffff'
    },
    darkPrimary: {
      main: '#01175C',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#5444F2',
      contrastText: '#ffffff'
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      main: '#F8E4D1'
    }
  },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true
      }
    },
    
    // MuiAppBar: {
    //   styleOverrides: {
    //     colorPrimary: {
    //       backgroundColor: '#3B8BEB'
    //     }
    //   }
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: 'white'
        }
      }
    }
  },

  typography: {
    fontFamily: 'Roboto, Arial',
    button: {
      textTransform: 'none'
    }
  }
});
