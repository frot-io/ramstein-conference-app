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
      subtitle: 'Dolor sid',
      image: {
        src: 'https://picsum.photos/200',
        alt: 'alt text'
      },
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
    },
    {
      id: 2,
      title: 'Foo Bar',
      subtitle: 'Foobar',
      image: {
        src: 'https://picsum.photos/200',
        alt: 'alt text'
      },
      description: 'onsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus'
    },
    {
      id: 3,
      title: 'Hish Hash',
      image: {
        src: 'https://picsum.photos/200',
        alt: 'alt text'
      },
      description: 'est Lorem ipsum dolor sit amet. Lorem'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
