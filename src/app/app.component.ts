import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    CardModule,
    DialogModule,
    MenubarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  sizeImg: string = 'w500';
  displayModal: boolean = false;
  title = 'absolute-cinema';
  items: any = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '#home'
    },
    {
      label: 'Now playing',
      icon: 'pi pi-home',
      url: '#now-playing'
    },
    {
      label: 'Coming Soon',
      icon: 'pi pi-home',
      url: '#coming-soon'
    },
    {
      label: 'Store',
      icon: 'pi pi-home',
      url: '#sstore'
    }
  ];
  movies = [
    {
      title: 'Movie #1',
      year: '2025',
      poster: 'images/cinema.png'
    },
    {
      title: 'Movie #2',
      year: '2025',
      poster: 'images/cinema.png'
    },
    {
      title: 'Movie #3',
      year: '2025',
      poster: 'images/cinema.png'
    },
    {
      title: 'Movie #4',
      year: '2025',
      poster: 'images/cinema.png'
    }
  ];
  movies2 = [
    {
      title: 'Movie #1',
      year: '2025',
      poster: 'images/cinema.png'
    },
    {
      title: 'Movie #2',
      year: '2025',
      poster: 'images/cinema.png'
    },
    {
      title: 'Movie #3',
      year: '2025',
      poster: 'images/cinema.png'
    },
    {
      title: 'Movie #4',
      year: '2025',
      poster: 'images/cinema.png'
    }
  ];
  movie: {
    title: string,
    year: string,
    poster: string,
  } = {
      title: '',
      year: '',
      poster: '',
    }

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    console.log('probando-1');
    this.getMovies();
    this.getUpcomingMovies();
  }


  public getMovie(movie: any) {
    this.movie = movie;
    this.displayModal = true;
  }


  async getMovies() {
    this.movieService.getMoviesWithHeaders().subscribe({
      next: (response) => {
        // this.movies = response.results;
        // this.currentPage = response.page;
        // this.totalPages = response.total_pages;
        // this.totalResults = response.total_results;
        // this.loading = false;
        console.log('Movies loaded:', response);

        this.updateCartelera(response.results);
      },
      error: (err) => {
        // this.error = 'Failed to load movies. Please check your API token.';
        // this.loading = false;
        console.error('Error:', err);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  async getUpcomingMovies() {
    this.movieService.getUpcomingMovies().subscribe({
      next: (response) => {
        console.log('Movies loaded:', response);
        this.updateCartelera2(response.results);
      },
      error: (err) => {
        // this.error = 'Failed to load movies. Please check your API token.';
        // this.loading = false;
        console.error('Error:', err);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  updateCartelera(results:any) {
    if (results) {
      this.movies = [];
      results.forEach((result: { title: any; year: any; poster_path: any; }) => {
        const movie = {
          title: result.title,
          year: result.year,
          poster: `https://image.tmdb.org/t/p/${this.sizeImg}${result.poster_path}`
        }
        this.movies.push(movie);
      });
    }
  }

  updateCartelera2(results:any) {
    if (results) {
      this.movies2 = [];
      results.forEach((result: { title: any; year: any; poster_path: any; }) => {
        const movie = {
          title: result.title,
          year: result.year,
          poster: `https://image.tmdb.org/t/p/${this.sizeImg}${result.poster_path}`
        }
        this.movies2.push(movie);
      });
    }
  }



}
