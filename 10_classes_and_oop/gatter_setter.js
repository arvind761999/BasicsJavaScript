class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

   get email(){
      return `${this._email}`;
   } 

   set email(value){
      this._email = value;
   
   }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}arvind`;
    }

    set password(value){
       this._password = value.toUpperCase();
    }

}

const arvind = new User("arvind@std.ai", "abc");
console.log(`Email is : ${arvind.email}`, `Password is : ${arvind.password}`);