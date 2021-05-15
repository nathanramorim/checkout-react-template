import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {
      themeName?:string
    }
}

const palette = {
  primary: {
    main: "#20172E",
  },
  secondary: {
    main: "#F9BC0D",
    light: "#F9BC0D",
  },
  text: {
    primary: "#20172E",
    secondary: "#F9BC0D"
  },
  white: "#FFFFFF",
  gray: "#C4C4C4" 
} 

const themeName = 'default';

export default createMuiTheme({palette, themeName});
