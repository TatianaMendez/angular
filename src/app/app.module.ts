import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinishComponent, SelphiComponent, SelphidComponent, VideoRecruitmentComponent, WidgetsComponent } from './components';


@NgModule({
  declarations: [
    AppComponent,
    SelphidComponent,
    SelphiComponent,
    VideoRecruitmentComponent,
    WidgetsComponent,
    FinishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
