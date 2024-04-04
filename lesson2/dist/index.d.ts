interface IUserForm {
    name: string;
    age: number;
}
interface IUser extends IUserForm {
    id: number;
}
declare class UserService {
    private static readonly _userKey;
    private static _getAll;
    static create(data: IUserForm): void;
    static _showHTML(): void;
    private static _setToStorage;
    static deleteByID(id: number): void;
}
interface IInput {
    name: HTMLInputElement;
    age: HTMLInputElement;
}
declare const form: HTMLFormElement;
