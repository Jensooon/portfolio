import { Component } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { Subscription } from 'rxjs';
import { ScrollRevealDirective } from '../scroll-reveal.directive';
@Component({
  selector: 'app-dissertation',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './dissertation.component.html',
  styleUrl: './dissertation.component.css',
})
export class DissertationComponent {
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
