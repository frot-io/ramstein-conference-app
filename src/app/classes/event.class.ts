import { Place } from './place.class';
import { Image } from './image.class';

export class Event {
  id: number;
  title: string;
  image?: Image;
  location?: Place;
  description?: string;
  favorite?: boolean;
}
