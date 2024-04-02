// interface IUser {
//     id: number,
//     name: string,
//     username: string,
//     email: string,
//     phone: number,
//     website: string,
//     addresses: {
//         street: string,
//         suite: string,
//         city: string,
//         zipcode: number,
//         geo: {
//             lat: number,
//             lng: number,
//         }
//     },
//     company: {
//         name: string,
//         catchPhrase: string,
//         bs: string
//     }
// }
//
//
// function showUser(user: IUser) {
//     console.log(user)
// }
//
// const userMax: IUser = {
//     id: 0,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     addresses: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: 929983874,
//         geo: {
//             lat: -37.3159,
//             lng: 81.1496
//         }
//     },
//     phone: 17707368031,
//     website: "hildegard.org",
//     company: {
//         name: "Romaguera-Crona",
//         catchPhrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets"
//     }
// };
// showUser(userMax)
// 2)написать интерфейс Animal который описывает:
// -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

// interface IAnimals{
//     name:string,
//     movementType:string,
//     scream:string,
//     info():string
// }
// class Cat implements IAnimals{
//
//     name:string;
//     movementType:string;
//     scream:string;
//     constructor() {
//         this.name = 'cat';
//         this.movementType = 'walking';
//         this.scream = 'meow';
//     }
//     info(): string {
//         return `This is a ${this.name}. Movement type: ${this.movementType}. What does the ${this.name} say? ${this.scream}`
//     }
// }
// class Fish implements IAnimals{
//
//     name:string;
//     movementType:string;
//     scream:string;
//     constructor() {
//         this.name = 'fish';
//         this.movementType = 'swimming';
//         this.scream = '...oO0';
//     }
//     info(): string {
//         return `This is a ${this.name}. Movement type: ${this.movementType}. What does the ${this.name} say? ${this.scream}`
//     }
// }
// class Bird implements IAnimals{
//
//     name:string;
//     movementType:string;
//     scream:string;
//     constructor() {
//         this.name = 'bird';
//         this.movementType = 'flying';
//         this.scream = 'chikchirik';
//     }
//     info(): string {
//         return `This is a ${this.name}. Movement type: ${this.movementType}. What does the ${this.name} say? ${this.scream}`
//     }
// }
// function ShowAnimal(animal:IAnimals){
//     return animal.info()
// }
// let Tom=new Cat();
// let Chika=new Bird();
// let Dory=new Fish();
// console.log(ShowAnimal(Tom));
// console.log(ShowAnimal(Chika));
// console.log(ShowAnimal(Dory));

// *** 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

// abstract class Shape{
//     a:number;
//     b:number;
//     c?:number
//
//     abstract perimeter():number;
//     abstract area():number;
// }
// class Triangle extends Shape{
//     a:number;
//     b:number;
//     c:number;
//
//     constructor(a:number,b:number,c:number) {
//         super();
//         this.a=a;
//         this.b=b
//         this.c=c
//     }
//     perimeter(): number {
//         return this.a+this.b+this.c;
//     }
//     area(): number {
//         const p = (this.a + this.b + this.c) / 2;
//         return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
//     }
// }
// class Rectangle extends Shape{
//     a:number;
//     b:number;
//
//     constructor(a:number,b:number) {
//         super();
//         this.a=a;
//         this.b=b
//     }
//     perimeter(): number {
//         return (this.a+this.b)*2;
//     }
//     area(): number {
//         return this.a*this.b;
//     }
// }
// let arr=[];
// arr.push(new Triangle(3,2,1));
// arr.push(new Rectangle(3,2));
// arr.push(new Triangle(13,22,11));
// arr.forEach(value => {
//     console.log(`p=${value.perimeter(value)}   s=${value.area(value)}`)
// })