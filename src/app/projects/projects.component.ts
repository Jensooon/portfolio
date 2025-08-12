import { Component } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { Subscription } from 'rxjs';
import { ScrollRevealDirective } from '../scroll-reveal.directive';
import { TitleComponent } from '../projects/title/title.component';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective, TitleComponent, LottieComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  isComponentBGDark: boolean = false;
  private themeSubscription?: Subscription;

  rockerGreenOptions: AnimationOptions = {
    path: '/assets/lottie/green bottle rocker.json',
  };
  rockerRedOptions: AnimationOptions = {
    path: '/assets/lottie/red bottle rocker.json',
  };

  devCodeRedOptions: AnimationOptions = {
    path: '/assets/lottie/red dev code.json',
  };

  devCodeGreenOptions: AnimationOptions = {
    path: '/assets/lottie/green dev code.json',
  };

  pongRedOptions: AnimationOptions = {
    path: '/assets/lottie/red pong.json',
  };

  pongGreenOptions: AnimationOptions = {
    path: '/assets/lottie/green pong.json',
  };

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
