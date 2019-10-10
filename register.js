
const registerButton = document.getElementById('register');

registerButton.addEventListener('click',addUsers);  //add users after subtmiting the info.
window.addEventListener('load', getUsers); //get users after loading the page.

//getting users from db.json
function getUsers(){
    const headers = new Headers({'Content-Type':'application/json'});
    return fetch('http:localhost:3000/users', {
    method:'GET',
    headers: headers
    }).then(response => {
        return response.json();
    }).then(res => console.log(res));
    
}
//adding users to db.json
function addUsers(event) {
    event.preventDefault();
    const loginData = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    const headers = new Headers({'Content-Type':'application/json'});
    return fetch ('http:localhost:3000/users', {
    method:'POST',
    body: JSON.stringify(loginData),
    headers: headers
    }).then(res => res.json())
    .catch(error =>console.error('Error:', error))
    .then(response => console.log('Success:', response));

}

function printValues(event) {
    event.preventDefault();
    console.log(event.target.value);
    const data = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    console.log(data);
}