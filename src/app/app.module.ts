import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  SohoButtonModule,
  SohoComponentsModule,
  SohoLocaleModule,
} from 'ids-enterprise-ng';

import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';
import { HeaderComponent } from './header/header.component';
import { PersonalizeMenuComponent } from './personalize-menu/personalize-menu.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import DeactivateGuard from './deactivate-guard';

const appRoute: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'message', component: MessageComponent },
  {
    path: 'form',
    component: FormComponent,
    canDeactivate: [DeactivateGuard],
  },
];
@NgModule({
  declarations: [AppComponent, HeaderComponent, PersonalizeMenuComponent],
  imports: [
    BrowserModule,
    SohoLocaleModule,
    SohoButtonModule,
    SohoLocaleInitializerModule,
    SohoComponentsModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
  ],
  providers: [
    DeactivateGuard,
    {
      provide: LOCALE_ID,
      useValue: 'en-US',
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
