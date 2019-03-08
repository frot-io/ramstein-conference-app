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
        src: 'https://picsum.photos/300',
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
        src: 'https://picsum.photos/300',
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
        src: 'https://picsum.photos/300',
        alt: 'alt text'
      },
      description: 'est Lorem ipsum dolor sit amet. Lorem'
    },
    {
      id: 4,
      title: 'Lorem Ipsum',
      location: {
        name: 'Mars',
        id: 'mars'
      },
      image: {
        src: 'https://picsum.photos/300',
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
        src: 'https://picsum.photos/300',
        alt: 'alt text'
      },
      description: 'onsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus'
    },
    {
      id: 6,
      title: 'Homer Simpson',
      location: {
        name: 'Saturn',
        id: 'saturn'
      },
      image: {
        src: 'https://picsum.photos/300',
        alt: 'alt text'
      },
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
        src: 'https://picsum.photos/300',
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
      image: {
        src: 'https://picsum.photos/300',
        alt: 'alt text'
      },
      description: 'onsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus'
    },
    {
      id: 9,
      title: 'Hish Hash',
      location: {
        name: 'Pluto',
        id: 'pluto'
      },
      image: {
        src: 'https://picsum.photos/300',
        alt: 'alt text'
      },
      description: 'est Lorem ipsum dolor sit amet. Lorem'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
