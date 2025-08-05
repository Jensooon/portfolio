// home.component.ts

import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';
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
import { TruckComponent } from './truck/truck.component';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

declare var FinisherHeader: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ScrollRevealDirective,
    UserCardComponent,
    SolarSystemComponent,
    TitleComponent,
    AboutComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    DissertationComponent,
    TruckComponent,
    LottieComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  isComponentBGDark: boolean = false;
  private themeSubscription?: Subscription;

  constructor(
    private themeService: ThemeServiceService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  options: AnimationOptions = {
    path: '/assets/lottie/Audio Wave.json',
  };

  ngOnInit() {
    this.themeSubscription = this.themeService
      .getGlobalDark()
      .subscribe((isDark) => {
        this.isComponentBGDark = isDark;
        // Re-initialize the header AFTER Angular has updated the class
        // The timeout ensures this runs after the DOM update.
        setTimeout(() => this.initializeFinisherHeader(), 0);
      });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.initializeFinisherHeader();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.initializeFinisherHeader();
  }

  private initializeFinisherHeader(): void {
    // Target the main container div
    const profileContentEl =
      this.el.nativeElement.querySelector('.profile-content');

    if (profileContentEl) {
      // Always try to find and remove an old canvas to prevent duplicates
      const oldCanvas = profileContentEl.querySelector('canvas');
      if (oldCanvas) {
        this.renderer.removeChild(profileContentEl, oldCanvas);
      }

      // ONLY create a new animation if the class is present (i.e., in dark mode)
      if (profileContentEl.classList.contains('finisher-header')) {
        new FinisherHeader({
          count: 30,
          size: { min: 2, max: 8, pulse: 0 },
          speed: { x: { min: 0, max: 0.4 }, y: { min: 0, max: 0.6 } },
          colors: {
            background: '#373737',
            particles: ['#fbfcca', '#d7f3fe', '#ffd0a7'],
          },
          blending: 'overlay',
          opacity: { center: 1, edge: 0 },
          skew: -2,
          shapes: ['c'],
        });
      }
    }
  }
}
