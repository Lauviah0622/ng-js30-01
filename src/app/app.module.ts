import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrumKitComponent } from './components/drum-kit/drum-kit.component';
import { DrumKeysComponent } from './components/drum-keys/drum-keys.component';
import { InstrumentKeyComponent } from './components/instrument-key/instrument-key.component';
import { PressEventsComponent } from './components/press-events/press-events.component';

@NgModule({
  declarations: [
    AppComponent,
    DrumKitComponent,
    DrumKeysComponent,
    InstrumentKeyComponent,
    PressEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
