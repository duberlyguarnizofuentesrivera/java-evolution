import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {MainFooterComponent} from './static/main-footer/main-footer.component';
import {MainCtoComponent} from './static/main-cto/main-cto.component';
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import {RippleModule} from "primeng/ripple";
import {MainHeaderComponent} from './static/main-header/main-header.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainCtoComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DividerModule,
    CardModule,
    RippleModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
