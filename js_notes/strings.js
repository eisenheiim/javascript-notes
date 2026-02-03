let text = document.getElementById("demo");

let text2=document.getElementById("demo1")

if (Math.random()<3){
    text.innerHTML="3 ten küçük "
}
else{
    text.innerHTML="3 veya 3 ten büyük"
}

text2.innerText=(1<2) ? "sude":"ibos";

for(let i=2;i<10;i++){

}



loop1:for(let i=0;i<5;i++){
    loop2:for (let j=10;j<20;j++){
        if (j>15){
            break loop2}
        text2.innerHTML+="a"+i+" "+j+"<br>"
        
    }
}

/*    STRINGS */

//template strings. they allow multiline strings+single and double quotes inside a string.

let text3 = `He's often called "Johnny"
.he has brown eyes. 
`;

//Template strings allow variables in strings. 

let name2="sude"
let sentence= ` hi my name is ${name2}. i am feeling awsome.`

//to find length use text.length

let text1="haloo"
let lenght_text1=text1.length;

// to escape characters \ turns special characters into string characters

let name= " hi my name is \"sude\" "
let name1= " i am ibos\'s girlfriend4"


// STRING METHODS

text.length;
text.charAt(0) //index position
text.at(2);
text[2]

/*js extracting string parts

Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)

*/


let surname="aslan rayamah"
let somepart=surname.slice(2,12)

somepart=surname.slice(2)
somepart=surname.slice(-12) //position is counted from end of the string

let upper=surname.toUpperCase();
let lower=surname.toLowerCase();

//trim method removes whitespace from both sides of a string
surname="     hiii.   !   "
let trimmed=surname.trim();

//repeat method returns a string with a number of copies of a string
let repeated=surname.repeat(2)

//replace method replaces a specified value with another value. replaces only the first match

let replaced=surname.replace("aslan","ASLAN")

//to replace all matches
text = text.replaceAll("Cats","Dogs");


//converting to an array with split.
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

//for single characters

text.split("")





