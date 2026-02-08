//Simple Primitive Types

//-----booleans

let isactive:boolean=true;

let haspermission=false;

//numbers

let decimal:number=6;
let hex:number= 3.14;

//strings

let color:string="blue";
console.log(color);

//bigingt

const bigNumber: bigint = 9007199254740991n;


//sysmbol=creates unique identifiers. useful for creating property keys and constants.


const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"