import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeServiceService } from '../../theme-service.service';

@Component({
  selector: 'app-solar-system',
  standalone: true,
  imports: [],
  templateUrl: './solar-system.component.html',
  styleUrl: './solar-system.component.css'
})
export class SolarSystemComponent {
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
