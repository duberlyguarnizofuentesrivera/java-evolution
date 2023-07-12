import {LOCALE_ID, NgModule} from '@angular/core';
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
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import spanishLocale from '@angular/common/locales/es';
import {TimelineComponent} from './dynamic/timeline/timeline.component';
import {TimelineModule} from "primeng/timeline";
import {ChipModule} from "primeng/chip";
import {TagModule} from "primeng/tag";
import {BadgeModule} from "primeng/badge";

registerLocaleData(spanishLocale)

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainCtoComponent,
      MainHeaderComponent,
      TimelineComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ButtonModule,
        DividerModule,
        CardModule,
        RippleModule,
        NgOptimizedImage,
        TimelineModule,
        ChipModule,
        TagModule,
        BadgeModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: "es"}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
