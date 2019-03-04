import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactsServiceService} from '../services/contacts-service.service';

// @ts-ignore
@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {
  contact: Contact = new Contact();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(public contactservice: ContactsServiceService) { }

  ngOnInit() {
  }
  onsaveContact(dataForm: any ) {
  this.contactservice.saveContact(dataForm).subscribe(
    data => {
      console.log(data);

    }, err => {
      console.log(JSON.parse(err._body).message);

    }
  );
  }

}
