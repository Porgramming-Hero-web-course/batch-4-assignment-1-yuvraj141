{
    //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
    // Sample Input :
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));

// // Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }
    interface Profile{
        name:string,
        age:number
        email:string
    }
   type Partial<P,Q,R>={
    name?:P,
    age?:Q,
    email?:R
}
    function updateProfile(user:Profile,partialUp:Partial<string,number,string>){
   return {...user,...partialUp}
    }
    const myProfile={name:'alice',age:63,email:"alice@gmail.com"}
    console.log(updateProfile(myProfile,{age:4}));
  
}