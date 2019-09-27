import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
document.body.onload = displayJokes;
function displayJokes(){
    const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");
}

document.getElementById("btnGet").onclick = function(){
    document.getElementById("joke").innerHTML = 
    jokes.getJokeById(document.getElementById("inputGet").value);
};
document.getElementById("btnAdd").onclick = function(){
    jokes.addJoke(document.getElementById("inputAdd").value);
    displayJokes();
};

function getQuote() {
    fetch("https://studypoints.info/jokes/api/jokes/period/hour")
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        document.getElementById("showQuote").innerHTML = data.joke;
     });
}
document.getElementById("getQuote").onclick = getQuote;
setInterval(getQuote,3600000);

document.getElementById("1").onclick = function(){
    alert("north")
}
// show all users
fetch("http://localhost:3333/api/users")
.then(function(response) {
    return response.json();
    })
    .then(function(data) {
        console.log(data);
        var tablehead = Object.keys(data[0]).map(x => "<td>" + x.toUpperCase() 
                + "</td>");
        tablehead.unshift("<tr>");
        tablehead.push("</tr>");
        tablehead = tablehead.join("\n");
        var tabledata = data.map(obj => "<tr>"+Object.keys(obj).map(x => "<td>" + obj[x] + "</td>").join("\n")+"</tr>").join("\n");
        var table = tablehead + tabledata;

        //d
        document.getElementById("users").innerHTML = table;
        });

// edit user
function makeOptions(http_method, body) {
    var options =  {
      method: http_method,
      headers: {
        "Content-type": "application/json"
      }
    }
    if(body){
      options.body = JSON.stringify(body);
    }
    return options;
   }

document.getElementById("submit").onclick = function() {
    const userid = document.getElementById("userid").value;
    const age = document.getElementById("age").value;
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;

    const data = {age: age, name: name, gender: gender, email: email};
    console.log(data);
    const options = makeOptions("PUT",data);

    function handleHttpErrors(res){
        if (!res.ok) {
          return Promise.reject({status: res.status, fullError: res.json() })
        }
        return res.json();
       }
       
    fetch("http://localhost:3333/api/users/"+userid,options)
    .then(res => handleHttpErrors(res))
    .then(data => console.log(data))
    .catch(err => {
      console.log(err);
      
      if(err.status){
        err.fullError.then(e=>console.log(e.detail))
      } else {
        console.log("Network error"); 
      }
    });
}



