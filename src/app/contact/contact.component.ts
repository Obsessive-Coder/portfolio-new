import { Component, OnInit } from '@angular/core';
import { faPhone, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { AppConstants } from '../shared/constants/app.constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailAddress: string = AppConstants.EMAIL;
  phoneNumber: string[] = AppConstants.PHONE;

  phoneIcon: IconDefinition = faPhone;

  get formattedPhoneNumber(): string {
    return this.phoneNumber.join('');
  }

  constructor() { }

  ngOnInit(): void {
  }
}
