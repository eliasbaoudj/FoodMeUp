import { getMuiTheme } from 'material-ui/styles';

import {
  blueGrey700,
  blueGrey500,
  blueGrey100,
  lightGreen500,
  grey500,
  darkBlack,
  white,
  grey300,
} from 'material-ui/styles/colors';

export default getMuiTheme({
  palette: {
    primary1Color: blueGrey700,
    primary2Color: blueGrey500,
    primary3Color: blueGrey100,
    accent1Color: lightGreen500,
    accent2Color: white,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
  },
});
