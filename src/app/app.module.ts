import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {HomeService} from './shared/home.service';

import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule,UiSwitchModule],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
