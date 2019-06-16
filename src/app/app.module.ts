import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { EventsDetailsComponent } from './components/events-details/events-details.component';
import { EventsComponent } from './components/events/events.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HelpComponent } from './components/help/help.component';
import { InfoDetailsComponent } from './components/info-details/info-details.component';
import { InfoComponent } from './components/info/info.component';
import { LegalComponent } from './components/legal/legal.component';
import { LocationsComponent } from './components/locations/locations.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { PushNotificationDialogComponent } from './components/push-notification-dialog/push-notification-dialog.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StartpageComponent } from './components/startpage/startpage.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HelpComponent,
    LocationsComponent,
    EventsComponent,
    SidenavComponent,
    StartpageComponent,
    ToolbarComponent,
    PushNotificationDialogComponent,
    InfoDetailsComponent,
    FavoritesComponent,
    EventsDetailsComponent,
    LegalComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    BrowserAnimationsModule,
    LeafletModule.forRoot(),
    MarkdownModule.forRoot(),
    FlexLayoutModule,
    NgMasonryGridModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  entryComponents: [
    PushNotificationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
