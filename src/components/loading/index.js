import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {colors} from '../../utils/constant';
import PropTypes from 'prop-types';

const Loading = ({show}) => {
  if (!show) {
    return null;
  }
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" animating={true} color={colors.brown} />
    </View>
  );
};

Loading.defaultProps = {
  show: true,
};

Loading.propTypes = {
  show: PropTypes.bool,
};

const styles = StyleSheet.create({
  loader: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
  },
});

export default Loading;
