import { Component, HostListener, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Bb8ToggleComponent } from './bb8-toggle/bb8-toggle.component';
import { Subscription } from 'rxjs';
import { ThemeServiceService } from '../theme-service.service';
import { RouterModule } from '@angular/router';
import { MobileToggleComponent } from './mobile-toggle/mobile-toggle.component';
import { ViewportScroller, CommonModule } from '@angular/common'; // CommonModule for ngClass

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [
    Bb8ToggleComponent,
    MobileToggleComponent,
    RouterModule,
    CommonModule
  ],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  isComponentBGDark: boolean = false;
  private themeSubscription?: Subscription;

  activeSection: string | null = null;
  // IMPORTANT: This 'headerHeight' MUST MATCH the 'height' defined in your CSS :host selector.
  // It's a numerical representation of a CSS property, not styling in TS.
  private headerHeight: number = 70; // <-- Set this to your desired header height in pixels (e.g., 70, 80, 100)

  sectionIds: string[] = ['home', 'about', 'projects', 'dissertation'];

  constructor(
    private themeService: ThemeServiceService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.themeSubscription = this.themeService
      .getGlobalDark()
      .subscribe((isDark) => {
        this.isComponentBGDark = isDark;
      });
  }

  ngAfterViewInit(): void {
    // We can still call updateActiveSection here to set initial state on load
    this.updateActiveSection();
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateActiveSection();
  }

  // Removed @HostListener('window:resize') as height is now fixed by CSS

  updateActiveSection(): void {
    let currentActive: string | null = null;
    const scrollPosition = window.scrollY + this.headerHeight + 1;

    for (const sectionId of this.sectionIds) {
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentActive = sectionId;
          break;
        }
      }
    }

    if (!currentActive && window.scrollY < this.headerHeight) {
      this.activeSection = 'home';
    } else {
      this.activeSection = currentActive;
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      const targetScrollPosition = element.getBoundingClientRect().top + window.scrollY - this.headerHeight;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth'
      });
    }
  }
}