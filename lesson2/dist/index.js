class UserService {
    static _getAll() {
        return JSON.parse(localStorage.getItem(this._userKey)) || [];
    }
    static create(data) {
        const users = this._getAll();
        const id = users.length ? users.slice(-1)[0].id + 1 : 1;
        users.push({ id, ...data });
        this._setToStorage(users);
    }
    static _showHTML() {
        const userContainer = document.querySelector('#userContainer');
        userContainer.innerHTML = '';
        const users = this._getAll();
        const userHtmlContent = users.map(user => {
            const itemDiv = document.createElement('div');
            const button = document.createElement('button');
            button.innerText = 'delete';
            button.onclick = () => {
                this.deleteByID(user.id);
            };
            itemDiv.innerText = `${user.id}---${user.name}---${user.age}`;
            itemDiv.appendChild(button);
            return itemDiv;
        });
        if (userHtmlContent.length) {
            userContainer.append(...userHtmlContent);
        }
        else {
            userContainer.innerText = 'users not exist';
        }
    }
    static _setToStorage(data) {
        localStorage.setItem(this._userKey, JSON.stringify(data));
        this._showHTML();
    }
    static deleteByID(id) {
        const users = this._getAll();
        const index = users.findIndex(user => user.id === id);
        users.splice(index, 1);
        this._setToStorage(users);
    }
}
UserService._userKey = 'users';
UserService._showHTML();
const form = document.forms['userForm'];
form.onsubmit = (e) => {
    e.preventDefault();
    let { name: nameInput, age: ageInput } = form;
    UserService.create({ name: nameInput.value, age: +ageInput.value });
    form.reset();
};
//# sourceMappingURL=index.js.map