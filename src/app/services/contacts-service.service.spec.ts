import { TestBed } from '@angular/core/testing';

import { ContactsServiceService } from './contacts-service.service';

describe('ContactsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsServiceService = TestBed.get(ContactsServiceService);
    expect(service).toBeTruthy();
  });
});
