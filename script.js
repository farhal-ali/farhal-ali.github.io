var itemsArray = [                                                  //QUESTION NO 1
    {name:"juice", price: 50, quantity: 3},
    {name:"cookie", price: 30, quantity: 9},
    {name:"shirt", price: 880, quantity: 1},
    {name:"pen", price: 100, quantity: 2}];
var juice = itemsArray[0].price * itemsArray[0].quantity;
document.write("Assignment: Task 1" + "<br>");
document.write("Total Juice: " +  juice + "<br>");  

var cookie = itemsArray[1].price * itemsArray[1].quantity;
document.write("Total Cookies: " +  cookie + "<br>");

var shirt = itemsArray[2].price * itemsArray[2].quantity;
document.write("Total Shirts: " +  shirt + "<br>");

var pen = itemsArray[3].price * itemsArray[3].quantity;
document.write("Total Pens: " +  pen + "<br>");

var total = juice + cookie + shirt + pen;
document.write("Total price of all items: " +  total + "<br>");

var object = {                                                       //QUESTION NO 2
    name: "Farhal Ali",
    email: "farhal@gmail.com",
    password: "abc123",
    age: 23,
    gender: "Male",
    city: "karachi",
    country: "Pakistan"
}
document.write("<br>"+ "Assignment: Task 2" + "<br>");

var chkAgeProperty = "age" in object;
var chkCountryProperty = "country" in object;
var chkFirstNameProperty = "firstName" in object;
var chkLastNameProperty = "lastName" in object;

if(chkAgeProperty === true && chkCountryProperty === true){
    document.write("Yes, age and country properties exist" + "<br>");
}else if(chkAgeProperty === true){
    document.write("Age property exist but country property does not exist" + "<br>");
}else if(chkCountryProperty === true){
    document.write("Country property exist but age property does not exist" + "<br>");
}else{
    document.write("No, age and country properties does not exist" + "<br>");
}

if(chkFirstNameProperty === true && chkLastNameProperty === true){
    document.write("Yes, firstName and lastName properties exists" + "<br>");
}else{
    document.write("No, firstName and lastName properties does not exist" + "<br>");
}

function Constructor(name, age, gender, city, country){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
}
                                                                        //QUESTION NO 3
var record1 = new Constructor("farhal", 23, "male", "karachi", "pakistan");
var record2 = new Constructor("ammad", 25, "male", "toba tek sing", "pakistan");
var record3 = new Constructor("saqib", 24, "male", "mianwali", "pakistan");
console.log(record1);
console.log(record2);
console.log(record3);
document.write("<br>"+ "Assignment: Task 3" + "<br>");
document.write("Check in console" + "<br>");

                                                                        //QUESTION NO 4
document.write("<br>"+ "Assignment: Task 4" + "<br>");
document.write("Sorry, unable to complete it" + "<br>");  

function Population(name, gender, address, education, profession){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
var person1 = new Population("farhal", "male", "karachi", "graduation", "engineer");
var person2 = new Population("ammad", "male", "toba tek sing", "inter", "student");
var person3 = new Population("saqib", "male", "mianwali", "F.Sc", "student");
