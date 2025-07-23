import { Component } from '@angular/core';
import { Bb8ToggleComponent } from './bb8-toggle/bb8-toggle.component';
import { Subscription } from 'rxjs';
import { ThemeServiceService } from '../theme-service.service';
import { RouterModule } from '@angular/router';
import { MobileToggleComponent } from './mobile-toggle/mobile-toggle.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [Bb8ToggleComponent, MobileToggleComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {
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
