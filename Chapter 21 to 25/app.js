//Chp 21-25 Q 1

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = (firstName + " " + lastName);
// alert ("Welcome " + fullName);


//Chp 21-25 Q2

// var phoneName = prompt ("Enter your favourite phone Name (Your will get your input Length)");
// var len = phoneName.length;
// document.write("My favourite Phone is: " + phoneName + '<br>');
// document.write("Length of String: " + len);


//Chp 21-25 Q3

// var cntry = "Pakistani";
// var cntryslc = cntry.slice(0);
// for (var i=0; i<cntry.length; i++){
//     if (cntry[i] === 'n'){
//         alert("String of 'n' is: " + i);
//     }
// }

//Chp 21-25 Q4

// var hw = "Hello World!"
// var indx = hw.lastIndexOf("l");
// document.write("String: Hello World!", '<br>', "Last Index of word 'L' is: " + indx );

//Chp 21-25 Q5

// var str = "Pakistani";
// var strslc = str.charAt(3);
// document.write("String: Pakistani", '<br>', "Character at 3rd Index: " + strslc);

//Chp 21-25 Q6

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName.concat(" " + lastName);
// alert ("Welcome " + fullName);

//Chp 21-25 Q7

// var city1 = "Hyderabad";
// var change = city1.replace("Hyder", "Islam");
// document.write("City: " + city1 + '<br>', "After Replacement: " + change);

//Chp 21-25 Q8

// var message = ("Ali and Sami are best friends. They play cricket and football together");
// var newText = message.replace(/and/gi, "&");
// document.write("Actual Text was: " + message + '<br>', "After replacing 'and' to '&': " + newText);

//Chp 21-25 Q9

// var num = "472";
// var num2 = +num;
// document.write("Value: " + num + '<br>', "Type: String", '<br>');
// document.write("Value: " + num2 + '<br>', "Type: Number");


//Chp 21-25 Q10

// var input = prompt("Enter a word to convert text to Upper Case");
// var upper = input.toUpperCase();
// document.write("User Input: " + input + '<br>');
// document.write("Upper Case: " + upper);

//Chp 21-25 Q11

// var input = prompt("Enter a word to convert text to Title Case");
// var firstword = input.slice(0,1);
// var firstword = firstword.toUpperCase();
// var otherword = input.slice(1);
// document.write("User Input: " + input + '<br>');
// document.write("Upper Case: " + firstword + otherword);


//Chp 21-25 Q12

// var num = 35.36;
// var str = num.toString();
// var str = str.replace(".", "");
// document.write("Number: " + num + '<br>');
// document.write("Result: " + str);


