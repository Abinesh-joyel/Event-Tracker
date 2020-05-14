import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/constant';
import PropTypes from 'prop-types';

const AppText = ({style, weight = 'regular', children, ...props}) => {
  return (
    <Text
      style={[styles.text, style, {fontFamily: `nunito_sans_${weight}`}]}
      {...props}>
      {children}
    </Text>
  );
};

AppText.propTypes = {
  style: PropTypes.object,
  weight: PropTypes.oneOf(['regular', 'bold', 'extrabold']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

const styles = StyleSheet.create({
  text: {
    color: colors.black,
  },
});

export default AppText;
