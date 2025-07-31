import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements AfterViewInit {

  // Get a reference to the #squeezeHeading element from the template
  @ViewChild('squeezeHeading') headingRef!: ElementRef<HTMLHeadingElement>;

  // This Angular hook runs once after the component's view is initialized
  ngAfterViewInit(): void {
    this.setupAnimation();
  }

  private setupAnimation(): void {
    // Get the actual DOM element
    const headingElement = this.headingRef.nativeElement;
    const text = headingElement.textContent || '';

    // Split the text and wrap each character in its own <span>
    const newHtml = text.split('').map(char => {
      return char === ' ' ? `<span>&nbsp;</span>` : `<span>${char}</span>`;
    }).join('');

    headingElement.innerHTML = newHtml;

    // Get all the new <span> elements
    const letters = headingElement.querySelectorAll('span');

    // Add event listeners to each letter to handle the animation
    letters.forEach(letter => {
      // On mouse hover, add the animation class if it's not already animating
      letter.addEventListener('mouseenter', () => {
        if (!letter.classList.contains('is-animating')) {
          letter.classList.add('is-animating');
        }
      });

      // When the animation finishes, remove the class to reset it
      letter.addEventListener('animationend', () => {
        letter.classList.remove('is-animating');
      });
    });
  }
}