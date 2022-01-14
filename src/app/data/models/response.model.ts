// EXAMPLE res:
// {
//      page: 1,
//      results: [],
//      total_pages: 223132,
//      total_results: 223132,
// }
export class ResponseModel {
    constructor(
        public page: number,
        public results: any[],
        public totalPages: number,
        public totalResult: number
    ) {}
}
