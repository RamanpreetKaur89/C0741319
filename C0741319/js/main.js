alert("I love singing");
alert(2 + 2);
var date = new Date();
alert(date);
console.log("The date is " + date);
var dog = new Date();
alert(dog);
var cat = new Date();
alert(cat);
alert(cat = dog);
document.body.innerHTML = "<h1> The date is " + cat + "<h1>";
document.body.innerHTML = "<h1> The date is " + cat.getMonth() + "/" + cat.getFullYear() + "<h1>";
document.body.innerHTML = "<h1> The date is " + cat.getMonth() + "/" + cat.getDate() + "/" + cat.getFullYear() + "<h1>";
document.body.innerHTML = "<h1> The date is " + (cat.getMonth() + 1) + "/" + cat.getDate() + "/" + cat.getFullYear() + "<h1>";
function myFunction() {
    var cat = new Date();
    document.body.innerHTML = "<h1> The date is " + (cat.getMonth() + 1) + "/" + cat.getDate() + "/" + cat.getFullYear() + "<h1>";
}