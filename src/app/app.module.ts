import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelocomePageComponent } from './welocome-page/welocome-page.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SeatsComponent } from './seats/seats.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    WelocomePageComponent,
    HeaderComponent,
    SeatsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
