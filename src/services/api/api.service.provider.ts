import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './consts';

@Injectable({ providedIn: 'root' })
export class ApiServiceProvider
{
    constructor(private http: HttpClient) { }

    fetchMovies()
    {
        return new Promise((resolve, reject) => {
            const URL = this.apiUri(`discover/${API.endPoint.movie}`);

            this.http
                .get(URL)
                .toPromise()
                .then((res: any) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    fetchPopularPerson() {
        return new Promise((resolve, reject) => {
            const URL = this.apiUri('person/popular');

            this.http
                .get(URL)
                .toPromise()
                .then((res: any) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    searchMovie(...param: []) {
        //
    }

    apiUri(path: string): string {
        return `${API.apiUrl}/${path}?api_key=${API.config.key}`;
    }

    imagesUri(type: string): string {
        if (type === 'poster') {
            return `${API.imgUrl}/${API.config.img.posterSize}`;
        }

        return `${API.imgUrl}/${API.config.img.backdropSize}`;
    }
}
