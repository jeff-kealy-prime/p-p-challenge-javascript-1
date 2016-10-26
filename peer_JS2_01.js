/*
1. Start with the number 68 and set that equal to 'value'*/
var value = 68;
//2. Create condition logic to check if the value is great or equal to 81
//2-1. If true, add 9 to 'value'
//2-2. If false, subtract 1 from 'value'

if(value >= 81){
    value += 9;
} else {
    value--;
}

//3. Create a string that is set to 95, add it to 'value'
var string95 = "95";
value += string95;



//4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array = [];
for (var i = 0; i < value.length; i++){
    array[i]=value.charAt(i);
}

//5. Remove the first and last values off the array

array.shift();
array.pop();

// 6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)

var newVariable = [];
//console.log(array[array.length-1]);
//console.log(array.length-1);
for(i = array.length-1; i >= 0; i-- ){
    newVariable += array[i];
    
}
//console.log(newVariable);
//7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;

value = parseInt(value);
newVariable = parseInt(newVariable);

//console.log(value);
//console.log(newVariable);
//******** SWITCH PROGRAMMERS *******

//8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
value += newVariable;
//console.log(value);
//9. If the new value of 'value' is greater than 3271, set 'value' equal to 59. If not, check to see if it is equal to 1069, if it is, set 'value' equal to 95. 
if(value > 3271){
    value = 59;
} else if(value == 1069) {
    value = 95;
} else {
    value = 11;
}
//If neither of these are true, set the value to 11.
//console.log("value = " + value);
//10. Create a while loop that counts down from 6 and increments 'value' by 1.
i=6;
while( i > 0){
    value++;
    i--;
}
//console.log("valu3 = " + value);


//11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
//is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.
var func = function(val){
    val = val.toString();
    //console.log("string = " + val);
    //console.log(" length = " + val.length);
    //console.log(val.slice(1));
    
    //console.log(" val " + val);
    if(val.length > 1){
        val = val.slice(1);
    }
    return val;
}

//12. Call the function.
value = func(value);
//13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.
console.log(value);
//14. Your answer should be a String value that equals 5. Is that what you got?

