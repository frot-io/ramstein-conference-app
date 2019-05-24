import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})
export class MapComponent {
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
  public locations = [
    marker([ 49.468336, 7.525594 ], this.locationOptions).bindPopup('Friedenscamp'),
    marker([ 49.509176, 7.780170 ], this.locationOptions).bindPopup('Werner Liebrich Friedensfußballturnier'),
    marker([ 49.468336, 7.525594 ], this.locationOptions).bindPopup('Friedenswerkstatt'),
    marker([ 49.444297, 7.761579 ], this.locationOptions).bindPopup('Anti-Basen Kongress'),
    marker([ 49.444297, 7.761579 ], this.locationOptions).bindPopup('Abendveranstaltung'),
    marker([ 49.447888, 7.555465 ], this.locationOptions).bindPopup('Demonstration und Festival Aufakt'),
    marker([ 49.438392, 7.568276 ], this.locationOptions).bindPopup('Abschluß + Festival'),
    marker([ 49.468336, 7.525594 ], this.locationOptions).bindPopup('Friedensfest im Camp'),
  ];
}
