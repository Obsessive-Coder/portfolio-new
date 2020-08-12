import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../shared/constants/app.constants';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  title: string = AppConstants.BIO_TITLE;

  constructor() {}

  ngOnInit(): void {
  }

}
