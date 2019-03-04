import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactsServiceService} from '../services/contacts-service.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})

export class NewContactComponent implements OnInit {
mode = 1 ;
contact: Contact = new Contact();

constructor(public contactService: ContactsServiceService) {
  }

  ngOnInit() {
  }

  AddContact() {
  console.log(this.contact);
  this.contactService.saveContact(this.contact).subscribe(
    data => {
      console.log(data);
      this.mode = 2;
    }, err => {
      console.log('error');
    }
  );
  }
  reset(){
  this.contact.clear();
  }
}
