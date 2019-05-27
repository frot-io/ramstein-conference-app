import { ChangeDetectorRef, Component } from '@angular/core';
import { icon, latLng, marker, tileLayer } from 'leaflet';
import locationsJson from '../../constants/locations.json';

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
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '© OpenStreetMap contributors' })
    ],
    zoom: 11,
    center: latLng(this.defaultLat, this.defaultLng)
  };

  // Locations
  private locationOptions = {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 16 ],
      iconUrl: 'assets/leaflet/marker-icon.png',
      shadowUrl: 'assets/leaflet/marker-shadow.png'
    })
  };
  public locations = locationsJson.map(location => ({
    ...location,
    marker: marker([location.lat, location.lng], { ...this.locationOptions, title: location.id })
      .bindPopup(location.name).on('click', e => {
        this.openedExpansionPanelId = e.target.options.title;
        this.changeDetector.detectChanges();
      })
    })
  );
  public mapMarkers = this.locations.map(l => l.marker);

  public openedExpansionPanelId: string;

  constructor(private changeDetector: ChangeDetectorRef) {}
}
