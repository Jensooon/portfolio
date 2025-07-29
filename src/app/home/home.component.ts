// home.component.ts

// 1. Add HostListener, ElementRef, and Renderer2 to your Angular core imports
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  isComponentBGDark: boolean = false;
  private themeSubscription?: Subscription;

  // 2. Inject ElementRef and Renderer2 into the constructor
  constructor(
    private themeService: ThemeServiceService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

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

  ngAfterViewInit(): void {
    // 4. Call the new private method here
    this.initializeFinisherHeader();
  }

  // 3. Add this HostListener to re-run the logic on resize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.initializeFinisherHeader();
  }

  private initializeFinisherHeader(): void {
    const headerEl = this.el.nativeElement.querySelector('.finisher-header');

    if (headerEl) {
      // Find and remove any old canvas to prevent duplicates
      const oldCanvas = headerEl.querySelector('canvas');
      if (oldCanvas) {
        this.renderer.removeChild(headerEl, oldCanvas);
      }

      // Re-initialize the script with your configuration
      new FinisherHeader({
        count: 100,
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
