// console.log("hanzala")

// var num = 1
// var result = ++num
// var result2 = ++result
// var result3 = ++result2
// var result4 = ++result3
// var nresult = --result4
// var nresult2 = --result
// var nresult3 = --result2
// var nresult4 = --result3
// console.log(num+result+nresult)

// 




var admissionform = alert("THIS IS STUDENTS ADMISSION FORM ! ")
var admissionform = alert("Please Enter Your Information");

var firstname = prompt("FIRST NAME ")
var lastname = prompt("LAST NAME");
var full_name = firstname+  " " +lastname;
var age = Number(prompt("AGE"));
var gender = prompt("GENDER")
var number  = Number(prompt("MOBILE NUMBER"));


alert("Admission Form" + " " + "Your Name is :" + " " + full_name + " " + "Your Age is :" + " " + age + " " +  "Your Mobile Number is :" + " " + number + " " );
var submit = alert("THANKS! TO GIVE YOUR DATA !   PLZ WAIT CHECK YOUR GIVEN DATA")

if(gender == "male"){
    alert("Eligible")
}else{
    alert("Only Male" )
}
if(age <= 16){
    alert("Sorry! Under 16 are not Eligible For This Admission Form")
}
if(number == 11){
    alert("Your Number Is Accepted")
}