import { EventsActionsUnion, EventsActionTypes } from './../../actions/events/events.actions';
import { Event } from './../../classes/event.class';

export const initialState: Array<Event> = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    location: {
      name: 'Merkur',
      id: 'merkur'
    },
    image: {
      src: './assets/mock/1.jpeg',
      alt: 'alt text'
    },
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
  },
  {
    id: 2,
    title: 'Foo Bar',
    location: {
      name: 'Venus',
      id: 'venus'
    },
    image: {
      src: './assets/mock/2.jpeg',
      alt: 'alt text'
    },
    description: 'onsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus'
  },
  {
    id: 3,
    title: 'Hish Hash',
    location: {
      name: 'Erde',
      id: 'erde'
    },
    image: {
      src: './assets/mock/3.jpeg',
      alt: 'alt text'
    },
    description: 'est Lorem ipsum dolor sit amet. Lorem'
  },
  {
    id: 4,
    title: 'Try clicking on the location',
    location: {
      name: 'Mars',
      id: 'mars'
    },
    image: {
      src: './assets/mock/4.jpeg',
      alt: 'alt text'
    },
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
  },
  {
    id: 5,
    title: 'Sektfrühstück',
    location: {
      name: 'Jupiter',
      id: 'jupiter'
    },
    image: {
      src: './assets/mock/5.jpeg',
      alt: 'alt text'
    },
    description: 'onsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus'
  },
  {
    id: 6,
    title: 'This event has no image',
    location: {
      name: 'Saturn',
      id: 'saturn'
    },
    // no image
    description: 'est Lorem ipsum dolor sit amet. Lorem'
  },
  {
    id: 7,
    title: 'Dolor sid',
    location: {
      name: 'Uranus',
      id: 'uranus'
    },
    image: {
      src: './assets/mock/7.jpeg',
      alt: 'alt text'
    },
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
  },
  {
    id: 8,
    title: 'Foo Bar',
    location: {
      name: 'Neptun',
      id: 'neptun'
    },
    // no image
    description: 'onsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus'
  },
  {
    id: 9,
    title: 'This event neither',
    location: {
      name: 'Pluto',
      id: 'pluto'
    },
    image: {
      src: './assets/mock/9.jpeg',
      alt: 'alt text'
    },
    description: 'est Lorem ipsum dolor sit amet. Lorem'
  }
];

export function eventsReducer(state = initialState, action: EventsActionsUnion) {
  switch (action.type) {
    case EventsActionTypes.Favor:
      const favorIndex = state.map(event => event.id).indexOf(action.payload.id);
      return [
        ...state.slice(0, favorIndex),
        { ...state[favorIndex], favorite: true },
        ...state.slice(favorIndex + 1)
      ];

    case EventsActionTypes.Unfavor:
      const unfavorIndex = state.map(event => event.id).indexOf(action.payload.id);
      return [
        ...state.slice(0, unfavorIndex),
        { ...state[unfavorIndex], favorite: false },
        ...state.slice(unfavorIndex + 1)
      ];

    case EventsActionTypes.Reset:
      return state.map(event => {
        event.favorite = false;
      });

    default:
      return state;
  }
}
