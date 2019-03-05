import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {ContactsServiceService} from '../services/contacts-service.service';
import {Contact} from '../../model/model.contact';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  pageContacts: any;
  motCle: string;
  page = 0;
  size: number;
  pages: any;
  constructor(private http: Http, public contactsService: ContactsServiceService, public router: Router
  ) {

   /* this.contactsService.getContacts().subscribe(data => {
      this.pageContacts = data;
    }, err => {
      console.log('error data');
    });
*/
   this.motCle = '';
   this.searchData();
  }

  searchData() {
    this.contactsService.searchContactsByCle(this.motCle, this.page, 5).subscribe(data => {
      this.pageContacts = data;
      this.pages = new Array<number>(data.totalPages);
    }, err => {
      console.log('error data');
    });
  }
  ngOnInit() {
  }

  goToPage(i: number) {
      this.page = i;
      this.searchData();
  }
  resetSearching() {
    this.motCle = '';
    this.searchData();
    }
   editerContact(id: number) {
    this.router.navigate(['edit-contact', id]);
  }
  deletecontact(id: number ) {
    if (confirm('Vous êtes sûr de la supression')) {
      this.contactsService.deletecontact(id).subscribe(data => {
        this.searchData();

      }, err => {
        alert('Error lors de supression');
      });
    }
  }
}
