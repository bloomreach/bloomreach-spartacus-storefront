import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrxSpartacusLibModule } from '@bloomreach/brx-spartacus-library';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrxModule } from './brx/brx.module';
import { SpartacusModule } from './spartacus/spartacus.module';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { environment } from '../environments/environment';
import { I18nModule } from '@spartacus/core';

@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    I18nModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    BrowserTransferStateModule,
    BrxModule,
    BrxSpartacusLibModule.forRoot({ ...environment }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
