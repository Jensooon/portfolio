import { Component } from '@angular/core';
import { Scroll } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { ScrollRevealDirective } from '../scroll-reveal.directive';
import { ThemeServiceService } from '../theme-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [ScrollRevealDirective, LottieComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
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
