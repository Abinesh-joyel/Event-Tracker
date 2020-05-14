import {getState} from '../../store';
import Toast from 'react-native-simple-toast';
import {navigate} from '../../navigation/service';

const initialState = {
  viewType: [
    {id: '1', label: 'List view', value: 'list'},
    {id: '2', label: 'Grid view', value: 'grid'},
  ],
  eventData: [
    {
      id: '1',
      event: 'Metallica Concert',
      place: 'Palace Grounds',
      entry: 'paid',
    },
    {
      id: '2',
      event: 'Saree Exhibition',
      place: 'Malleswaram Grounds',
      entry: 'free',
    },
    {
      id: '3',
      event: 'Wine tasting event',
      place: 'Links Brewery',
      entry: 'paid',
    },
    {
      id: '4',
      event: 'Startups Meet',
      place: 'Kanteerava Indoor Stadium',
      entry: 'paid',
    },
    {id: '5', event: 'Summer Noon Party', place: 'Kumara Park', entry: 'paid'},
    {
      id: '6',
      event: 'Rock and Roll nights',
      place: 'Sarjapur Road',
      entry: 'paid',
    },
    {id: '7', event: 'Barbecue Fridays', place: 'Whitefield', entry: 'paid'},
    {id: '8', event: 'Summer workshop', place: 'Indiranagar', entry: 'free'},
    {
      id: '9',
      event: 'Impressions & Expressions',
      place: 'MG Road',
      entry: 'free',
    },
    {
      id: '10',
      event: 'Italian carnival',
      place: 'Electronic City',
      entry: 'free',
    },
  ],
  event: {},
  eventTrackings: {},
};

export const events = {
  state: {
    ...initialState,
  },
  reducers: {
    setSingleEvent(state, payload) {
      return {
        ...state,
        event: payload,
      };
    },
    setTrackings(state, payload) {
      return {
        ...state,
        eventTrackings: payload,
      };
    },
    removeSingleEvent(state, payload) {
      return {
        ...state,
        event: {},
      };
    },
  },
  effects: (dispatch) => ({
    getSingleEvent(id, rootState) {
      const eventsData = [...rootState.events.eventData];
      const event = eventsData.filter((eve) => eve.id === id);
      if (event.length > 0) {
        dispatch.events.setSingleEvent(event[0]);
      }
    },
    addTrackings(data) {
      const state = getState();
      const eventTrackings = {...state.events.eventTrackings};
      const name = state.auth.userName;
      let trackingList = [];
      if (eventTrackings[name]) {
        trackingList = [...eventTrackings[name]];
      } else {
        eventTrackings[name] = [];
      }
      const index = trackingList.findIndex((eve) => eve.id === data.id);
      if (index === -1) {
        eventTrackings[name] = [...trackingList, data];
        dispatch.events.setTrackings(eventTrackings);
        Toast.show('Added to tracking list');
        navigate('trackings');
      } else {
        Toast.show('Already added to trackings');
      }
    },
    removeTrackings(id) {
      const state = getState();
      const eventTrackings = {...state.events.eventTrackings};
      const name = state.auth.userName;
      if (!eventTrackings[name]) {
        return;
      }
      const trackings = [...eventTrackings[name]];
      eventTrackings[name] = trackings.filter((eve) => eve.id !== id);
      dispatch.events.setTrackings(eventTrackings);
      Toast.show('Removed Successfully');
    },
    orderTrackings(data) {
      const state = getState();
      const eventTrackings = {...state.events.eventTrackings};
      const name = state.auth.userName;
      if (eventTrackings[name]) {
        eventTrackings[name] = data;
        dispatch.events.setTrackings(eventTrackings);
      }
    },
  }),
};
