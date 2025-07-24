import { Component } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { Subscription } from 'rxjs';
import { ScrollRevealDirective } from '../scroll-reveal.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faDatabase,
  faSyringe,
  faMap,
  faPencil,
  faVideo,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  // Font Awesome Icons
  faSearch = faSearch;
  faDatabase = faDatabase;
  faSyringe = faSyringe;
  faMap = faMap;
  faPencil = faPencil;
  faVideo = faVideo;
  faWrench = faWrench;

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
