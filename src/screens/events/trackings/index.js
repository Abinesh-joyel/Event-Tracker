import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {List} from '../../../components';
import {styles} from './styles';
import {connect} from 'react-redux';

const EventTrackings = ({
  eventTrackings,
  orderTrackings,
  removeTrackings,
  userName,
  navigation,
}) => {
  const [trackings, setTrackings] = useState([]);
  const _renderItem = ({item, index, drag}) => {
    return (
      <List
        {...item}
        onChange={_showDetails}
        drag={drag}
        remove
        onRemove={removeTrackings}
      />
    );
  };
  const _showDetails = (id) => {
    navigation.navigate('details', {id});
  };
  useEffect(() => {
    const data = eventTrackings[userName] ? eventTrackings[userName] : [];
    if (data.length !== trackings.length) {
      console.log('update');
      setTrackings(data);
    }
  }, [eventTrackings, trackings, userName]);
  const _onDragEnd = ({data}) => {
    setTrackings(data);
    orderTrackings(data);
  };
  return (
    <View style={styles.container}>
      <DraggableFlatList
        contentContainerStyle={styles.listItem}
        data={trackings}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.id}
        onDragEnd={_onDragEnd}
      />
    </View>
  );
};

const mapStateToProps = ({events: {eventTrackings}, auth: {userName}}) => ({
  eventTrackings,
  userName,
});

const mapDispatchToProps = ({events: {orderTrackings, removeTrackings}}) => ({
  orderTrackings,
  removeTrackings,
});

export default connect(mapStateToProps, mapDispatchToProps)(EventTrackings);
