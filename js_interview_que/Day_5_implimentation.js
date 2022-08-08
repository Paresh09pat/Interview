// DAY5 (Implementation)	
// Q.1) Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

function newTag(){
    document.getElementById('text').innerHTML=`<h1>MERN stack</h1>`
}


// Q.2)  Write code to get 1st H1 element from a webpage using DOM	

function tag() {
    document.getElementsByTagName('h1')[0].style.backgroundColor = 'aqua'   
}


// Q.3) Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second	

function startTime() {
    const today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let session = "PM"
    document.getElementById('txt').innerHTML =  hr + ":" + min + ":" + sec + ":" + session;
    setTimeout(startTime, 1000);

    if(hr>=12){
        session = "PM"
    }
    else{
        session= "AM"
    }
  }



// Q.4) Create an HTML page having content as Hello world and a button named Replace Text. 
// When user will click on this button page content should be changed to "Welcome to Elevation academy"	

function change(){
    document.getElementById('changetext').innerText= 'Welcome to Elevation academy'
}


// Q.5) Create an HTML page having content as "Hello world" and a button named "Hide Text" When user will click on this button hide the "Hello World" text	

function hideText(){
    document.getElementById('hide').style.visibility = 'hidden'
}

function showText(){
    document.getElementById('hide').style.visibility = 'visible'
}


// Q.6) Given an array of 0's and 1's find out number of 0's	

let array = [0, 1, 1, 0, 0, 1, 0]
let count = 0

for (let i = 0; i < array.length; i++) {
    if(array[i] == 0){
        count++
    }   
}

console.log(count);

// Q.7) Given an array find out total no. of odd and even nos.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var evenNumbers = numbers.filter(function(item) {
   return (item % 2 == 0);
});

var oddNumbers = numbers.filter(function(item) {
    return (item % 2 !== 0);
 });

 let total = numbers.length;
 
console.log(evenNumbers);
console.log(oddNumbers);
console.log(total);


// Q.8) Given a string find out number of vowels 

function vowels(count){
    let allVowels = "aeiou";
    let vCount = 0;
    
    for (let i=0; i < count.length; i++ ){
    if(allVowels.indexOf(count[i]) !== -1){
        vCount += 1;
    }
    }
    return vCount;
    }
    console.log(vowels('We are here but u all off you not there'));



// Q.9) Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same	





