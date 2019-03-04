import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutContactComponent } from './about-contact/about-contact.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';

const appRoutes: Routes = [
  {path : 'contacts' , component : ContactsComponent} ,
  {path : 'aboutContact' , component : AboutContactComponent},
  {path : 'new-contact' , component : NewContactComponent},
  {path : 'nouveau-contact' , component : NouveauContactComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutContactComponent,
    NewContactComponent,
    NouveauContactComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes) , HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
