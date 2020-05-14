import React, {memo} from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import {Text} from '../';
import {styles} from './styles';

const Grid = ({id, event, entry, onChange}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(id)}>
      <View style={styles.gridWrapper}>
        <View style={styles.eventWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../../assets/images/28.jpg')}
            />
          </View>
          <View style={styles.eventText}>
            <Text weight="bold">{event}</Text>
          </View>
          <View style={styles.eventEntry}>
            <Text weight="bold" style={styles.entryText}>
              {entry}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

Grid.propTypes = {
  id: PropTypes.string,
  event: PropTypes.string,
  place: PropTypes.string,
  entry: PropTypes.oneOf(['paid', 'free']),
  onChange: PropTypes.func,
};

export default memo(Grid);
