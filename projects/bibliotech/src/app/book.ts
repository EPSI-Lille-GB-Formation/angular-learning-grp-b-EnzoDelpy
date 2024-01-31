import { Categorie } from "./categorie";
import { User } from "./user";

export class Book{
    constructor(
        public id:number,
        public title:string,
        public resume:string,
        public image:string,
        public createdAt : Date,
        public updatedAt : Date|null,
        public categories: Categorie[],
        public user : User
    ){
        this.createdAt = new Date()
    }   
}