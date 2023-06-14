//Testing the functions
console.log(max(3,3));
console.log(maxOfThree(2,5,4));
console.log(isVowel("a"));
console.log(isVowel(1));
let arr = [4, 1, 2, 3];
console.log(sum(arr));
console.log(multiply(arr));
let name = 'Phronesis';
console.log(reverse(name));
let names = ["whyyyy", "good", "coool"]; 
console.log(findLongestWord(names));    // ???
console.log(filterLongWords(names, 4));
console.log(findSum(2,3));
console.log(findSum(2,3,4,5));
console.log(findMultiple(2,3));
console.log(findMultiple(2,3,4,5));


//1st function
function max(a, b){
    if(a > b){
        return a;
        // return function(){document.getElementById("displaygreater").value = a+" is greater"};
    }
    else if(b > a){
        return b;
        // return function(){document.getElementById("displaygreater").value = b+" is greater"};
    }
    else{
        return "They are equal";
        // return function(){document.getElementById("displaygreater").value = "They are equal"};
    }
}

//2nd function
function maxOfThree(a, b, c){
    if((a>b) && (a>c)){
        return a;
    }
    else if((b>a)&&(b>c)){
        return b;
    }
    else if((c>a)&&(c>b)){
        return c;
    }
    else{
        return "There are equal values";
    }
}

//3rd function
function isVowel(char){
    if((char==="a")||(char==="e")||(char==="i")||(char==="o")||(char==="u")||(char==="A")||(char==="E")||(char==="I")||(char==="O")||(char==="U")){
        return true;
    }
    else{
        return false;
    }
}

//4th function part-1
function sum(arr){
    let add = 0;
    for (let i = 0; i < arr.length; i++) {
        add += arr[i];
    }
    return add;
}

//4th function part-2
function multiply(arr){
    let times = 1;
    if(arr.length > 0){
        for (let i = 0; i < arr.length; i++) {
            times = times*arr[i];        
        }
    }
    else{
        return "invalid";
    }
    return times;
}

//5th function
function reverse(str){
    let preVal = "";
    let a = (str.length) - 1;
    for (let i = a; i >= 0; i--) {
        preVal = preVal + str[i];
    }
    return preVal;
}

//6th function
function findLongestWord(arr) {
    let longestLength;
    for (let i = 0; i < (arr.length - 1); i++) {
        if((arr[i].length) < (arr[i+1].length)) {
            longestLength = arr[i+1].length;
        }
        else {
            longestLength = arr[i].length;
        }
    }
    return longestLength;
}

//7th function
function filterLongWords(arr, i) {
    let newArray = [];
    let a = 0;
    for (let j = 0; j < arr.length; j++) {
        if ((arr[j].length) > i) {
            newArray[a] = arr[j];
            a++;
        }
        else{
            continue;
        }
    }
    return newArray;
}

//Exercise on "arguments" object
//a function that can be called with any number of arguments and returns the sum of the arguments
function findSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

//Example on rest parameters
//a function that returns the multiple of any number of arguments
function findMultiple(x, y, ...more) {
    let multiple = x*y;
    if(more.length > 0) {
        for (let i = 0; i < more.length; i++) {
            multiple *= more[i];
        }
    }
    return "The product is "+multiple;
}


// Testing the functions on events    ???
window.onload = function(){
    // // let a = parseInt(document.getElementById("num1").value);
    // // let b = parseInt(document.getElementById("num2").value);
    // // document.getElementById("compare").onclick = max(a, b);

    // let input1 = document.querySelector("#num1");
    // input1.value = 4;
    // let input2 = document.querySelector("#num2");
    // input2.value = 5;
    // console.log(input1);
    // let getMax = document.getElementById("compare");
    // getMax.onclick = max(input1.value, input2.value);

    // let input = document.getElementById("displaygreater");
    // input.value = "Hello World";
}