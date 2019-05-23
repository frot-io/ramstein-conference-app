import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})
export class MapComponent {
  latitude = 49.4684328;
  longitude = 7.5256019;
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 15,
    center: latLng(this.latitude, this.longitude)
  };
}
