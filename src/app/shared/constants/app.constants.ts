import { Injectable, Type } from '@angular/core';
import { NavItem, SocialItem } from '../interfaces/index';
import { BioComponent } from '../../bio/bio.component';
import { Routes, Route } from '@angular/router';
import { ExperienceComponent } from 'src/app/experience/experience.component';
import { EducationComponent } from 'src/app/education/education.component';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const paths: Array<string> = ['biography', 'experience', 'education'];
@Injectable({
  providedIn: 'root'
})
export class AppConstants {
  // Navigation Routes.
  static NAV_ROUTES: Routes = [{
    path: 'biography',
    component: BioComponent
  }, {
    path: 'experience',
    component: ExperienceComponent
  }, {
    path: 'education',
    component: EducationComponent
  }, {
    path: '',
    redirectTo: 'biography',
    pathMatch: 'full',
  }];

  public NAV_ITEMS: Array<NavItem> = AppConstants.NAV_ROUTES
    .filter(({ path }: Route) => path)
    .map(({ path }: Route, id) => ({
        id,
        path,
        label: path.substring(0, 3).toUpperCase()
      }
    ));

  public SOCIAL_ICONS: Array<SocialItem> = [{
    url: 'https://github.com/Obsessive-Coder',
    icon: faGithub
  }, {
    url: 'https://www.linkedin.com/in/jared-huffstutler/',
    icon: faLinkedin
  }];

  public trackByFn(index: number, item: { id: number }): number {
    return item.id;
  }
}
