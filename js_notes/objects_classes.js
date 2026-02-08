const person1={
    name:"sude",
    surname:"aslan"
}

const person2= new Object({
    firstname:"john",
    surname:"doe"
})
//there is no need to use new object

const person3=Object.create(person2);


//CLASSES

class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

const car1=new car("porche",2026)