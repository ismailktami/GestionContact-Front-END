import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Contact} from '../../model/model.contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {

  constructor(private http: Http) {
  }

  getContacts() {
    return this.http.get('http://localhost:8096/chercherContacts?mc=a&size=5&page=0').pipe(
      map(resp => resp.json())
    );
  }
  searchContactsByCle(motcle: string, page: number, size: number) {
    return this.http.get('http://localhost:8096/chercherContacts?mc=' + motcle + '&size=' + size + '&page=' + page).pipe(
      map(resp => resp.json())
    );
  }
  saveContact(contact: Contact) {


    return this.http.post('http://localhost:8096/contacts/save', contact).pipe(
      map(resp => resp)
      );
  }
  getContact(id: number ) {
    return this.http.get('http://localhost:8096/contacts/' + id).pipe(
      map(resp => resp.json())
    );
  }

  updateContact(contact: Contact) {
   return  this.http.put('http://localhost:8096/contacts/' + contact.id, contact).pipe(map(resp => {
      resp.json();
    }));

  }
  deletecontact(id: number){
    return this.http.delete('http://localhost:8096/contacts/' + id);
  }
}



