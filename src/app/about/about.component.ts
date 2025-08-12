import { Component, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeServiceService } from '../theme-service.service';
import { ScrollRevealDirective } from '../scroll-reveal.directive';

import { TitleComponent } from '../about/title/title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective, TitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
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
