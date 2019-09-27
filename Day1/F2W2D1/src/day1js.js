var array = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//own implementation of filter method
Array.prototype.filter = function (cb) {
    let newArr = [];
    for (let i in this) {
        if (cb(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

//own implementation of map method
Array.prototype.map = function (cb) {
    let newArr = [];
    for (let i in this) {
        newArr.push(cb(this[i]));
    }
    return newArr;
};

//filter method
console.log(array.filter(e => e.includes("a")));

//map method
console.log(array.map(e => e.split("").reverse().join("")));


//getting really comfortable with filter and map
//a

var numbers = [1, 3, 5, 10, 11];

var num = numbers.map(function(element, index) {
    if (index === numbers.length - 1) {
        return element;
    }
    return element + numbers[index + 1];
});
console.log(num);


//b
var links = array.map(e => "<a href=\"\">" + e + "</a>");
links.unshift("<nav>");
links.push("</nav>");
console.log(links.join("\n"));

c
var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, 
    {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];
//create table on load
document.body.onload = createTable(names);

function createTable(names) {
var tablehead = Object.keys(names[0]).map(x => "<td>" + x.toUpperCase() 
        + "</td>");
tablehead.unshift("<tr>");
tablehead.push("</tr>");
tablehead = tablehead.join("\n");
var tabledata = names.map(obj => "<tr>"+Object.keys(obj).map(x => "<td>" + obj[x] + "</td>").join("\n")+"</tr>").join("\n");
var table = tablehead + tabledata;

//d
document.getElementById("table").innerHTML = table;
}

//e
document.getElementById("btn").onclick = function(){
    createTable(names.filter(e => e.name.includes("a")));
};


//opg 5

//a
var all = ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(", "));
//b
var numbers = [2, 3, 67, 33];

console.log(numbers.reduce(function () {
    let sum = 0;
    for (let i in numbers) {
        sum += numbers[i];
    }
    return sum;
}));

//c
var members =
        [
            {name: "Peter", age: 18},
            {name: "Jan", age: 35},
            {name: "Janne", age: 25},
            {name: "Martin", age: 22}
        ];
        
let avgAge = members.reduce((total, current, ci) => {
    if (ci === members.length-1) {
        return (total + current.age) / members.length;
    }
    return total + current.age;
},0);

console.log(avgAge);

//d

var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

