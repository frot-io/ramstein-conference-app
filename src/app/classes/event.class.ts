import { Image } from './image.class';
import { Location } from './location.class';

export class Event {
  id: number;
  title: string;
  image?: Image;
  location?: Location;
  description?: string;
  favorite?: boolean;
}
