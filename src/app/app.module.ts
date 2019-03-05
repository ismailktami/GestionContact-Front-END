import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutContactComponent } from './about-contact/about-contact.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const appRoutes: Routes = [
  {path : 'contacts' , component : ContactsComponent} ,
  {path : 'aboutContact' , component : AboutContactComponent},
  {path : 'new-contact' , component : NewContactComponent},
  {path : 'nouveau-contact' , component : NouveauContactComponent},
  {path : 'edit-contact/:id' , component : EditContactComponent},
  {path : '' , redirectTo: '/contacts' , pathMatch: 'full'}


];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutContactComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes) , HttpModule, FormsModule,    AngularFontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
