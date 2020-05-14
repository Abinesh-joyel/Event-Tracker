import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {List, Grid, Picker} from '../../../components';
import {gridColumns} from '../../../utils/helper';
import {connect} from 'react-redux';

const EventList = ({navigation, viewType, eventData}) => {
  const [list, setList] = useState('list');
  const [key, setKey] = useState(1);
  const _showDetails = (id) => {
    navigation.navigate('details', {id});
  };

  const _renderItem = ({item}) => {
    return list === 'list' ? (
      <List {...item} onChange={_showDetails} />
    ) : (
      <Grid {...item} onChange={_showDetails} />
    );
  };

  const _onPickerChange = (value) => {
    setList(value);
    setKey((prev) => ++prev);
  };

  const numColumns = list === 'list' ? 1 : gridColumns;

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <Picker value={list} data={viewType} onChange={_onPickerChange} />
      </View>
      <FlatList
        key={key}
        contentContainerStyle={[
          styles.listItem,
          list === 'list' && styles.listPadding,
        ]}
        numColumns={numColumns}
        data={eventData}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapStateToProps = ({events: {eventData, viewType}}) => ({
  viewType,
  eventData,
});

export default connect(mapStateToProps, null)(EventList);
