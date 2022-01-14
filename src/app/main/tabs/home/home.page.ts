import { Component } from '@angular/core';
import { MovieModel } from 'src/app/data/models/movie.model';
import { PersonModel } from 'src/app/data/models/person.model';
import { MovieRepository } from 'src/app/data/repositories/movie.repository';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  movies: MovieModel[] = [];
  persons: PersonModel[] = [];

  constructor(private movieRepository: MovieRepository) {
    this.getPersons();
    this.getMovies();
  }

  getMovies() {
    this.movieRepository.getMovies().then((data: any) => {
      this.movies = data.results.map((movie: any) => new MovieModel(
            movie.adult,
            movie.backdrop_path,
            movie.genre_ids,
            movie.id,
            movie.original_language,
            movie.original_title,
            movie.overview,
            movie.popularity,
            movie.poster_path,
            movie.release_date,
            movie.title,
            movie.video,
            movie.vote_average,
            movie.vote_count,
      ));
    });
  }

  getPersons() {
    this.movieRepository.getPeoples().then((data: any) => {
      this.persons = data.results.map((person: any) => new PersonModel(
        person.id,
        person.known_for_department,
        person.name,
        person.popularity,
        person.profile_path
      ));
    });
  }

  getPoster(path: string) {
    return `${this.movieRepository.getImageUrl('poster')}${path}`;
  }

  onPersonPressed(person: PersonModel) {
    console.log(person);
  }

  onMoviePressed(movie: MovieModel) {
    console.log(movie);
  }

}
