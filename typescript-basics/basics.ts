//Primitives:number,string,boolean
//More complex:array,objects
//Function types,parameters


//primitives

let age:number;

age=12.1;

let userName:string;

userName='Max';

let isInstructor:boolean;

isInstructor=true


//More complex types

let hobbies:string[];

hobbies=['Sport','Cooking']

type Person={
    name:string;
    age:number;
};
let person:Person;

person={
    name:'Max',
    age:32
};

let people:Person[]

//Type inference

let course:string|boolean='React - the complete Guide'

course=true


