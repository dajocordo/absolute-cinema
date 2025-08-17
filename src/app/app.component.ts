import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    CardModule,
    MenubarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'absolute-cinema';
    items: any = [
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'On playing',
      icon: 'pi pi-home'
    },
    {
      label: 'Coming Soon',
      icon: 'pi pi-home'
    },
    {
      label: 'Store',
      icon: 'pi pi-home'
    }
  ];
  movies = [
    {
      title: 'Movie #1',
      year: '2025',
      poster: 'images/poster-1.png'
    },
    {
      title: 'Movie #2',
      year: '2025',
      poster: 'images/poster-2.png'
    },
    {
      title: 'Movie #3',
      year: '2025',
      poster: 'images/poster-3.png'
    },
    {
      title: 'Movie #4',
      year: '2025',
      poster: 'images/poster-4.png'
    }
  ];
}
