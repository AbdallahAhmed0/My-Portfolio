import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: string[] = [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Angular Material',
    'Git & GitHub',
    'Problem Solving',
    'Data Structures and Algorithms',
    'Object-Oriented Programming'
  ];
//   ngOnInit(): void {
//     Aos.init({
//       duration: 1000, // Animation duration (in ms)
//       offset: 200,    // Offset from the top
//       once: true      // Whether animation should happen only once
//     });
//   }
// }

}
