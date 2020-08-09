import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../shared/constants/app.constants';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor(public constants: AppConstants) { }

  ngOnInit(): void {
  }

}
