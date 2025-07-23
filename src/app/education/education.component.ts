import { Component, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeServiceService } from '../theme-service.service';
import { ScrollRevealDirective } from '../scroll-reveal.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ScrollRevealDirective, FontAwesomeModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  faChevronRight = faChevronRight; // Font Awesome Icon

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
