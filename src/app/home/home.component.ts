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
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TitleComponent } from './title/title.component';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

// This declaration helps TypeScript understand that 'FinisherHeader' will exist globally.
declare var FinisherHeader: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ScrollRevealDirective,
    TitleComponent,
    AboutComponent,
    ProjectsComponent,
    LottieComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  isComponentBGDark: boolean = false;
  private themeSubscription?: Subscription;

  // Lottie animation options
  rockerGreenOptions: AnimationOptions = {
    path: 'assets/lottie/green bottle rocker.json',
  };
  rockerRedOptions: AnimationOptions = {
    path: 'assets/lottie/red bottle rocker.json',
  };
  spaceMail: AnimationOptions = {
    path: 'assets/lottie/Space mail.json',
  };

  sailingBoat: AnimationOptions = {
    path: 'assets/lottie/sailing boat.json',
  };

  constructor(
    private themeService: ThemeServiceService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService
      .getGlobalDark()
      .subscribe((isDark) => {
        this.isComponentBGDark = isDark;
        // Dynamically load the correct script whenever the theme changes.
        this.loadFinisherHeaderScript(isDark);
      });
  }

  ngAfterViewInit(): void {
    // Perform the initial script load after the view is ready.
    this.loadFinisherHeaderScript(this.isComponentBGDark);
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
    // Clean up the script tag when the component is destroyed to prevent memory leaks.
    this.removeFinisherHeaderScript();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // On resize, we only need to re-create the animation instance, not reload the script.
    this.createFinisherHeaderInstance(this.isComponentBGDark);
  }

  /**
   * Dynamically loads the appropriate finisher-header script into the document.
   * It ensures only one script is loaded at a time by removing the old one first.
   * @param isDarkTheme Determines which script to load.
   */
  private loadFinisherHeaderScript(isDarkTheme: boolean): void {
    this.removeFinisherHeaderScript(); // Remove any existing script first.

    // --- MODIFIED CODE ---
    // These paths are now corrected to match your project's file structure.
    const scriptPath = isDarkTheme
      ? 'assets/js/finisher-header-dark.es5.min.js'
      : 'assets/js/finisher-header-light.es5.min.js'; // Assuming the light version has a similar name

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'id', 'finisher-header-script'); // Assign an ID for easy removal.
    this.renderer.setAttribute(script, 'src', scriptPath);

    // The script loads asynchronously. We must wait for the 'onload' event
    // to ensure the FinisherHeader object is available before we use it.
    script.onload = () => {
      this.createFinisherHeaderInstance(isDarkTheme);
    };

    // Add the script to the end of the body to trigger loading.
    this.renderer.appendChild(document.body, script);
  }

  /**
   * Creates the FinisherHeader animation instance. This function is called
   * only after the correct script has been successfully loaded.
   * @param isDarkTheme Determines which theme configuration to use.
   */
  private createFinisherHeaderInstance(isDarkTheme: boolean): void {
    // Safety check: Abort if the FinisherHeader library isn't available.
    if (typeof FinisherHeader === 'undefined') {
      console.error('FinisherHeader script has not loaded yet.');
      return;
    }

    const profileContentEl =
      this.el.nativeElement.querySelector('.profile-content');
    if (!profileContentEl) return;

    // Clear any previous canvas to prevent stacking animations.
    const oldCanvas = profileContentEl.querySelector('canvas');
    if (oldCanvas) {
      this.renderer.removeChild(profileContentEl, oldCanvas);
    }

    // Select the correct theme configuration based on the parameter.
    const config = isDarkTheme
      ? {
          // --- DARK THEME CONFIGURATION ---
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
        }
      : {
          // --- LIGHT THEME CONFIGURATION ---
          count: 20,
          size: { min: 17, max: 25, pulse: 0 },
          speed: { x: { min: 0, max: 0.2 }, y: { min: 0, max: 0.2 } },
          colors: {
            background: '#E9E8E8',
            particles: ['#4682A9', '#749BC2', '#91C8E4', '#FFFBDE', '#91C8E4'],
          },
          blending: 'screen',
          opacity: { center: 0.7, edge: 0.5 },
          skew: -0.9,
          shapes: ['c'],
        };

    // Create the new animation instance.
    new FinisherHeader({ ...config, target: profileContentEl });
  }

  /**
   * Finds and removes the FinisherHeader script tag from the document by its ID.
   */
  private removeFinisherHeaderScript(): void {
    const existingScript = document.getElementById('finisher-header-script');
    if (existingScript) {
      this.renderer.removeChild(document.body, existingScript);
    }
  }
}
