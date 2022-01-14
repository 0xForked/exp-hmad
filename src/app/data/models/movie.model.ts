// EXAMPLE res:
// {
//     "adult": false,
//     "backdrop_path": "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
//     "genre_ids": [
//         28,
//         12,
//         878
//     ],
//     "id": 634649,
//     "original_language": "en",
//     "original_title": "Spider-Man: No Way Home",
//     "overview": "Peter Parker is unmasked and no longer .....",
//     "popularity": 8745.819,
//     "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
//     "release_date": "2021-12-15",
//     "title": "Spider-Man: No Way Home",
//     "video": false,
//     "vote_average": 8.4,
//     "vote_count": 3811
// },

export class MovieModel {
    constructor(
        public adult: boolean,
        public backgropPath: string,
        public genreIds: [],
        public id: number,
        public originalLanguage: string,
        public originalTitle: string,
        public overview: string,
        public popularity: number,
        public posterPath: string,
        public releaseres: string,
        public title: string,
        public video: boolean,
        public voteAverage: number,
        public voteCount: number
    ){}
}
