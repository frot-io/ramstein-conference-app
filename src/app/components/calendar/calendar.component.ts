import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.styl']
})
export class CalendarComponent implements OnInit {
  public events = [
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

  constructor() { }

  ngOnInit() {
  }

  favorite(event) {
    alert('This does not work yet (but will be working in the future :)');
  }
}
