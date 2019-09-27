import 'bootstrap/dist/css/bootstrap.css'

document.onload = showPersons();

function showPersons() {
  fetch("https://sinanjasar.dk/rest-jpa-devops-starter-1.0.1/api/person/all")
    .then(res => res.json())
    .then(data => document.getElementById("all").innerHTML = JSON.stringify(data));
}

function makeOptions(http_method, body) {
  var options = {
    method: http_method,
    headers: {
      "Content-type": "application/json"
    }
  }
  if (body) {
    options.body = JSON.stringify(body);
  }
  return options;
}

document.getElementById("add").onclick = function () {
  const name = document.getElementById("name").value;
  const data = { name: name };
  const options = makeOptions("POST", data);
  fetch("https://sinanjasar.dk/rest-jpa-devops-starter-1.0.1/api/person/", options);
}

document.getElementById("edit").onclick = function () {
  const id = document.getElementById("editId").value;
  const name = document.getElementById("name").value;
  const data = { name: name };
  const options = makeOptions("PUT", data);
  fetch("https://sinanjasar.dk/rest-jpa-devops-starter-1.0.1/api/person/" + id, options);
}

  document.getElementById("remove").addEventListener('click', function () {
    console.log("inside rem")
    const id = document.getElementById("id").value;
    const options = makeOptions("DELETE");
    fetch("https://sinanjasar.dk/rest-jpa-devops-starter-1.0.1/api/person/" + id, options);
  });
