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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    Triangle.prototype.area = function () {
        var p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return (this.a + this.b) * 2;
    };
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    return Rectangle;
}(Shape));
var arr = [];
arr.push(new Triangle(3, 2, 1));
arr.push(new Rectangle(3, 2));
arr.push(new Triangle(13, 22, 11));
arr.forEach(function (value) {
    console.log("p=".concat(value.perimeter(value), "   s=").concat(value.area(value)));
});
