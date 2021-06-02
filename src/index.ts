// interface Human {
//     name : string,
//     age: number,
//     gender: string
// }
class Human {
    public name : string;
    public age : number;
    public gender: string;
    constructor(name:string, age:number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// const person = {
//     name : "dan",
//     age : 24,
//     gender: "male"
// }

const dan = new Human("dan",29,"male")

const sayHi = (person:Human):string => {
    return `Hello ${person.name}, your ${person.age} and ${person.gender}`
}

console.log(sayHi(dan));

export { }