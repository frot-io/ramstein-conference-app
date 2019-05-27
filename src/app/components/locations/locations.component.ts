import { Component } from '@angular/core';
import { icon, latLng, LeafletEvent, marker, tileLayer } from 'leaflet';
import { Location } from 'src/app/classes/location.class.js';
import locationsList from '../../constants/locations.json';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.styl']
})
export class LocationsComponent {
  // MapDefaults
  private defaultLat = 49.4684328;
  private defaultLng = 7.6256019;
  public options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' })
    ],
    zoom: 11,
    center: latLng(this.defaultLat, this.defaultLng)
  };

  // MapLocations
  private locationIcon = icon({
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 16 ],
    iconUrl: 'assets/leaflet/marker-icon.png',
    shadowUrl: 'assets/leaflet/marker-shadow.png'
  });
  private locationOptions = { icon: this.locationIcon };
  public mapLocations = locationsList.map(l => marker([l.lat, l.lng], this.locationOptions)
    .bindPopup(l.name).on('click', this.openExpansionPanel));

  public locations = locationsList;
  public currentLocation: string;

  openExpansionPanel(e: LeafletEvent) {
    console.log(e);
  }

  setCurrentLocation(location: Location) {
    this.currentLocation = location.id;
    const index = this.locations.map(l => l.id).indexOf(location.id);
    this.mapLocations[index].fire('click');
  }
}
