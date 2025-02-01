import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'App Store',
      description: 'The project involved the design and implementation of an online App store platform, which enables buy some products.',
      image: 'img/img Projects/storeApp.png',
      link:'https://github.com/AbdallahAhmed0/My-Store-Udacity-Angular',
      live: 'https://my-store-angular.netlify.app'
    },
    {
      name: 'Cine Glow',
      description: 'A captivating movie website built with TypeScript, Next.js, and Tailwind CSS.',
      image: 'assets/img/cine-glow.png',
      link: 'https://your-cine-glow-link.com'
    }
  ];
}
