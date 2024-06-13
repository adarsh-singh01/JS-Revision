const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        //console.log(`got user details from database`);
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());


const date=new Date()//this new is a contructor function ...it allows to make multiple instances from same object

function User(username,loginCount,signedIn){
    //this.myusername=username//we can write this way but we usually chose same name for both
    /*variable*/this.username=username
    this.loginCount=loginCount
    this.signedIn=signedIn
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
    return this//this is implicitly returned also
}

// const user1=User("adarsh",13,true)
// const user2=User("adan",14,false)//it overwrites
const user1= new User("adarsh",13,true)
const user2= new User("adan",14,false)//it creates a new object...a constructor function gives you a new instance or copy of original
console.log(user1)
console.log(user1.constructor)//it prints [Function: User] i.e. it is a refrence to its own constructor function
console.log(user2)


function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
}
const auto=new Car('honda','accord',1998);

console.log(auto instanceof Car)
console.log(auto instanceof Object)


