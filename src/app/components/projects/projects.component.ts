import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  visibleProjects: any[] = [];
  showAll = false;
  
  projects = [
    {
      name: 'App Store',
      description: 'The project involved the design and implementation of an online App store platform, which enables buy some products.',
      image: 'img/img Projects/storeApp.png',
      link:'https://github.com/AbdallahAhmed0/My-Store-Udacity-Angular',
      live: 'https://my-store-angular.netlify.app'
    },
    {
      name: 'Examination Management System',
      description: ' The project involved the design and implementation of an online examination platform, which enables the creation of exams, management of questions and the attempt of exams by students.',
      image: 'img/img Projects/Exam.jpg',
      link:'https://github.com/AbdallahAhmed0/Examination-Management-System',
      live: 'https://drive.google.com/file/d/1IWtkho7F-cd3mPD_lauaRmJ5iKLIUbOH/view'
    },
    {
      name: 'Quran Competition',
      description: 'This project features a registration system for users to apply for Quran competitions. It also includes a dedicated site providing detailed information about the various Quran competitions available.',
      image: 'img/img Projects/quran.jpg',
      link:'https://github.com/AbdallahAhmed0/Registration-for-the-Quran-Competition',
      live: 'https://quran-competition.netlify.app'
    },
    {
      name: 'Voting System',
      description: 'This project is a personal voting application that allows users to log in, participate in polls with single or multiple choices, and submit their votes with a digital signature. Built with responsiveness and user experience in mind, it ensures a seamless experience across devices.',
      image: 'img/img Projects/Voting.jpg',
      link:'https://github.com/AbdallahAhmed0/Voting-System',
      live: 'https://abdallahahmed0.github.io/Voting-System/login/login.html'
    },
    {
      name: 'Memory Game',
      description: 'This project is a simple memory game where players match pairs of cards. It features a timer and a scoring system to track performance.',
      image: 'img/img Projects/memory.jpg',
      link:'https://abdallahahmed0.github.io/MemoryGame/',
      live: 'https://github.com/AbdallahAhmed0/MemoryGame'
    },
    {
      name: 'My Portfolio',
      description: ' This project is a personal portfolio website that showcases my skills, projects, and contact information.',
      image: 'img/img Projects/portfolio.jpg',
      link:'https://github.com/AbdallahAhmed0/My-Portfolio',
      live: 'https://drive.google.com/file/d/1IWtkho7F-cd3mPD_lauaRmJ5iKLIUbOH/view'
    }
  ];

  ngOnInit() {
    this.visibleProjects = this.projects.slice(0, 4); // Show first 4 projects initially
  }
  
  showMoreProjects() {
    this.visibleProjects = this.projects; // Show all projects
    this.showAll = true;
  }
  
  showLessProjects() {
    this.visibleProjects = this.projects.slice(0, 4); // Show first 4 projects
    this.showAll = false;
  }

}
