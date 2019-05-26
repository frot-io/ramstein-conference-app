import { Component } from '@angular/core';
import { icon, latLng, marker, tileLayer } from 'leaflet';
import locationsList from '../../constants/locations.json';
import { Location } from 'src/app/classes/location.class.js';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.styl']
})
export class LocationsComponent {
  // Defaults
  private defaultLat = 49.4684328;
  private defaultLng = 7.6256019;
  public options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' })
    ],
    zoom: 11,
    center: latLng(this.defaultLat, this.defaultLng)
  };

  // Locations
  private locationIcon = icon({
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 16 ],
    iconUrl: 'assets/leaflet/marker-icon.png',
    shadowUrl: 'assets/leaflet/marker-shadow.png'
  });
  private locationOptions = { icon: this.locationIcon };
  public locations = locationsList.map(l => marker([l.lat, l.lng], this.locationOptions).bindPopup(l.name));
}
