import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const gridColumns = 2;

const isTablet = width > 540;

export {width as screenWidth, height as screenHeight, gridColumns, isTablet};
