import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit,OnInit {




  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  ngOnInit(): void {
  }
   
  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) {
      const texts = ['Abdallah Ahmed.', 'Front End Developer.'];
      const animationElement = document.getElementById('animation-text');
      let currentTextIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;

      const typeAndDelete = () => {
        if (animationElement) {
          if (isDeleting) {
            animationElement.textContent = texts[currentTextIndex].slice(
              0,
              currentCharIndex--
            );
          } else {
            animationElement.textContent = texts[currentTextIndex].slice(
              0,
              currentCharIndex++
            );
          }

          if (!isDeleting && currentCharIndex === texts[currentTextIndex].length) {
            isDeleting = true;
            setTimeout(typeAndDelete, 1100); // Pause before deleting
          } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(typeAndDelete, 700); // Pause before typing next text
          } else {
            setTimeout(typeAndDelete, isDeleting ? 150 : 200); // Typing/Deleting speed
          }
        }
      };

      typeAndDelete();
    }
  }
}

