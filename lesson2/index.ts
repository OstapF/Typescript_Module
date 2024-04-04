interface IUserForm{
    name:string,
    age:number

}
interface IUser extends IUserForm{
    id:number

}


class UserService{
    private static readonly _userKey='users';//проста константа const

    private static _getAll():IUser[]{
        return JSON.parse(localStorage.getItem(this._userKey))||[

        ]
    }


    static create(data:IUserForm):void{
        const users=this._getAll()
        const id=users.length?users.slice(-1)[0].id+1:1;
        users.push({id,...data});
        this._setToStorage(users)
    }

  static _showHTML():void{
        const userContainer=document.querySelector('#userContainer') as HTMLDivElement;
        userContainer.innerHTML=''
        const users= this._getAll();
      const userHtmlContent = users.map(user=>{
           const itemDiv= document.createElement('div');
           const button=document.createElement('button');
        button.innerText='delete';
        button.onclick=()=>{
            this.deleteByID(user.id)
          }
        itemDiv.innerText=`${user.id}---${user.name}---${user.age}`;
        itemDiv.appendChild(button);

        return itemDiv

        })
      if (userHtmlContent.length){
          userContainer.append(...userHtmlContent);
      }else {
          userContainer.innerText='users not exist'
      }
    }
    private static _setToStorage(data:IUser[]):void{
        localStorage.setItem(this._userKey,JSON.stringify(data));
        this._showHTML()
    }
    static deleteByID(id:number){
        const users=this._getAll();
        const  index =users.findIndex(user=>user.id===id);
        users.splice(index,1);
        this._setToStorage(users)
    }



}
UserService._showHTML()

interface IInput{
    name:HTMLInputElement;
    age:HTMLInputElement
}

const form=document.forms['userForm']as HTMLFormElement;
form.onsubmit=(e:SubmitEvent)=>{
    e.preventDefault();
    let {name:nameInput,age:ageInput}=form as any as IInput;
    UserService.create({name:nameInput.value,age:+ageInput.value})
    form.reset()
}