import { Component } from '@angular/core';
import { AppConstants } from './shared/constants/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = AppConstants.TITLE;
}
