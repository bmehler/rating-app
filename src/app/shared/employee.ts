import { Rating } from "./rating";  
export { Rating } from "./rating";  

export class Employee {
    constructor(
        public id: number,
        public img: string,
        public name: string,
        public city: string,
        public gender: string,
        public age: number,
        public position: string,
        public departement: string,
        public ratings: Rating[]
    ) {}
}