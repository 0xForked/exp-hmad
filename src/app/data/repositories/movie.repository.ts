import { Injectable } from '@angular/core';
import { ApiServiceProvider } from 'src/services/api/api.service.provider';
import { ResponseModel } from '../models/response.model';

@Injectable({ providedIn: 'root' })
export class MovieRepository {
    responseModel: ResponseModel;

    constructor(private apiServiceProvider: ApiServiceProvider) {}

    getMovies() {
        return new Promise((resolve, reject) => {
            // TODO: implement local and remote data source;
            // data flow
            // if data from network data source < 2.5 Minutes
            // and if network connection is not available
            // get data from local data source
            // else from network data source
            this.apiServiceProvider.fetchMovies().then((data: any) => {
                this.responseModel = data;

                resolve(this.responseModel);
            }).catch((err =>  reject(err)));
        });
    }

    getPeoples() {
        return new Promise((resolve, reject) => {

            // TODO: implement local and remote data source;
            // data flow
            // if data from network data source < 2.5 Minutes
            // and if network connection is not available
            // get data from local data source
            // else from network data source
            this.apiServiceProvider.fetchPopularPerson().then((data: any) => {
                this.responseModel = data;

                resolve(this.responseModel);
            }).catch((err =>  reject(err)));
        });
    }

    getImageUrl = (type: string) => this.apiServiceProvider.imagesUri(type);
}
