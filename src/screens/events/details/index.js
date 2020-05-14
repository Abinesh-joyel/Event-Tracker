import React, {useEffect} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';
import GestureRecognizer from 'react-native-swipe-gestures';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {colors} from '../../../utils/constant';
import {connect} from 'react-redux';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const EventDetails = ({
  route,
  navigation,
  event,
  getSingleEvent,
  removeSingleEvent,
  addTrackings,
}) => {
  useEffect(() => {
    const {id} = route.params;
    getSingleEvent(id);
    return () => {
      removeSingleEvent();
    };
  }, []);
  const onSwipeRight = (state) => {
    navigation.navigate('list');
  };
  const addToTrackings = () => {
    addTrackings(event);
  };
  return (
    <GestureRecognizer
      style={styles.container}
      onSwipeRight={onSwipeRight}
      config={config}>
      <ScrollView>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../../assets/images/28.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.eventDetails}>
          <View style={styles.spaceTop}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </View>
          <View style={[styles.top, styles.row, styles.jusbetween]}>
            <View style={[styles.flex1, styles.row]}>
              <MaterialIcons name="event" size={24} color={colors.brown} />
              <Text style={styles.eventText} weight="bold">
                {event?.event}
              </Text>
            </View>
            <View style={[styles.flex1, styles.row]}>
              <MaterialIcons
                name="my-location"
                size={24}
                color={colors.brown}
              />
              <Text style={styles.eventText} weight="bold">
                {event?.place}
              </Text>
            </View>
          </View>
          <View style={[styles.top, styles.row]}>
            <MaterialIcons name="attach-money" size={24} color={colors.brown} />
            <Text style={styles.eventText} weight="bold">
              {event?.entry}
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn} onPress={addToTrackings}>
        <Text weight="extrabold" style={styles.btnText}>
          Add To Trackings
        </Text>
      </TouchableOpacity>
    </GestureRecognizer>
  );
};

const mapStateToProps = ({events: {event}}) => ({
  event,
});

const mapDispatchToProps = ({
  events: {getSingleEvent, removeSingleEvent, addTrackings},
}) => ({
  getSingleEvent,
  removeSingleEvent,
  addTrackings,
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
