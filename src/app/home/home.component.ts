import { Component } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { Subscription } from 'rxjs';
import { ScrollRevealDirective } from '../scroll-reveal.directive';
import { UserCardComponent } from './user-card/user-card.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { DissertationComponent } from '../dissertation/dissertation.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TitleComponent } from './title/title.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollRevealDirective, UserCardComponent,SolarSystemComponent, TitleComponent, AboutComponent, ProjectsComponent, EducationComponent, ExperienceComponent, DissertationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isComponentBGDark: boolean = false;
  private themeSubscription?: Subscription;

  constructor(private themeService: ThemeServiceService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService
      .getGlobalDark()
      .subscribe((isDark) => {
        this.isComponentBGDark = isDark;
      });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
