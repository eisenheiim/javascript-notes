//all js functions are object methods. 
//this shows from who it is called from.

//if from an object, this==object

const user={
    name:"sude",
    sayhi(){
        console.log(this.name)
    }
}


//for html event handlers, it is the element that received the event.

//THIS

const person1={
    name:"sude"
}

const person2={
    name:"ibrahnim",
    surname:"rayamah"
}

function names(){
    return this.name;
}

console.log(names.call(person2));





//stealing someoneelse's function

const person3={
    name:"sude",
    surname:"aslan",
    name1:function(){
        return "name is " +this.name;
    },

    surname1:function(){
        return " surname is "+this.surname;
    },

    age:18,

    w_arguments:function(arg1,arg2){
        return arg1+arg2+this.name
    }
}

console.log(person3.surname1.call(person2))

//with arguments
console.log(person3.w_arguments.call(person2,"hello","sir"))

//regular functions
function age_caller(){
    return this.age;
}

console.log(age_caller(),age_caller.call(person3)) //undefined,18

//APPLY is same but arguments are in an array.

console.log(person3.w_arguments.apply(person2,["hello","sir"]))

//BIND creates new function and binds it to a speacific this
// Create person Object
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

// Create member Object
const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

// Bind the fullName method to the member Object
let fullName = person.fullName.bind(member);

// Later call fullname()
fullname()


function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);

double(5);

