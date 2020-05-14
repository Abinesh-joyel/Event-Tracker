import React, {memo} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {Text} from '../';
import {colors} from '../../utils/constant';

const List = ({id, event, place, entry, remove, onChange, onRemove, drag}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(id)} onLongPress={drag}>
      <View style={styles.listWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/28.jpg')}
          />
        </View>
        <View style={styles.eventDetails}>
          <View style={[styles.row, styles.jusbetween]}>
            <Text weight="bold" style={styles.eventText}>
              {event}
            </Text>
            <View style={styles.eventEntry}>
              <Text weight="bold">{entry}</Text>
            </View>
          </View>
          <View style={[styles.row, styles.jusbetween, styles.flex1]}>
            <Text style={styles.spaceTop}>{place}</Text>
            {remove && (
              <View style={styles.juscenter}>
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => onRemove(id)}>
                  <MaterialCommunityIcons
                    name="delete"
                    size={24}
                    color={colors.brown}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

List.defaultProps = {
  drag: () => {},
  onRemove: () => {},
  remove: false,
};

List.propTypes = {
  id: PropTypes.string,
  event: PropTypes.string,
  place: PropTypes.string,
  entry: PropTypes.oneOf(['paid', 'free']),
  onChange: PropTypes.func,
  drag: PropTypes.func,
};

export default memo(List);
