export class PersonModel {
    constructor(
        public id: number,
        public knownForDepartment: string,
        public name: string,
        public popularity: number,
        public profilePath: string
    ) {}
}
