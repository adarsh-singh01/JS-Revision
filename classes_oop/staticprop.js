class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
  static createID() {
    //prevent access outside
    return `123`;
  }
}

const hitesh = new User("hitesh");
//console.log(hitesh.createID());

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
  }
}

const koo = new Teacher("omk", "omk@meta.com", 123);
koo.logMe()
//console.log(koo.createID())