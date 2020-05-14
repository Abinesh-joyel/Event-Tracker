import React from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import PropTypes from 'prop-types';

const PickerItem = ({value, data, onChange}) => {
  return (
    <Picker
      selectedValue={value}
      style={styles.picker}
      onValueChange={onChange}
      mode="dialog">
      {data.map((item) => (
        <Picker.Item key={item.id} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

PickerItem.propTypes = {
  value: PropTypes.string,
  data: PropTypes.array,
  onChange: PropTypes.func,
};

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: '100%',
  },
});

export default PickerItem;
