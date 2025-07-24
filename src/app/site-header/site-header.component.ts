import { Component, HostListener, OnInit, AfterViewInit, OnDestroy, HostBinding } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeServiceService } from '../theme-service.service';
import { Bb8ToggleComponent } from './bb8-toggle/bb8-toggle.component';
import { MobileToggleComponent } from './mobile-toggle/mobile-toggle.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    Bb8ToggleComponent,
    MobileToggleComponent,
  ],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  isComponentBGDark: boolean = false;
  private themeSubscription?: Subscription;

  activeSection: string | null = null;
  private headerHeight: number = 70;
  private sectionIds: string[] = ['home', 'about', 'projects', 'dissertation'];

  @HostBinding('class.scrolled')
  isScrolled: boolean = false;

  // 👇 These getters apply the correct theme class to the host element
  @HostBinding('class.light-theme')
  get isLightTheme() {
    return !this.isComponentBGDark;
  }

  @HostBinding('class.dark-theme')
  get isDarkTheme() {
    return this.isComponentBGDark;
  }

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
    this.updateActiveSection();
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
    this.updateActiveSection();
  }

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