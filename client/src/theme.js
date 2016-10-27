/*
 * Description:
 *
 * Author:  Henrik
 * File:
 * Version: 0.0.1
 *
 * Created: 2016-10-24
 */
import {
  cyan700,
  pinkA100,
  pinkA200,
  pinkA400,
  grey600,
  blueGrey800,
  blueGrey900,
  fullWhite,
  white,
  darkBlack,
} from 'material-ui/styles/colors';

import { fade } from 'material-ui/utils/colorManipulator';
import Spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan700,
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: pinkA200,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor: white,
    alternateTextColor: '#303030',
    secondaryTextColor: fade(fullWhite, 0.7),
    canvasColor: blueGrey800,
    canvas2Color: blueGrey900,
    borderColor: fade(white, 0.3),
    disabledColor: fade(white, 0.3),
    pickerHeaderColor: fade(white, 0.12),
    clockCircleColor: fade(white, 0.12),
  },
  appBar: {
    backgroundColor: darkBlack,
  },
};
