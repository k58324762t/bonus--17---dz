const removeBtn = document.getElementById('remove');
const clearBtn = document.getElementById('clear');
let user ={
    name: 'Azamat',
    age:23,
    position:' android'
}

let result = JSON.stringify(user);

localStorage.setItem('user', result);


function getUser () {
    let user= localStorage.getItem('user');
    console.log(JSON.parse(user));
    console.log(user);

}
function handleRem () {
    localStorage.removeItem("user");
}
removeBtn.addEventListener('click', handleRem);
getUser()
let userTwo ={
    nameTwo: 'Jon',
    ageTwo:34,
    positionTwo:' backend'
}
let resultTwo = JSON.stringify(userTwo);
localStorage.setItem('userTwo', resultTwo);

function getUserTwo () {
    let userTwo= localStorage.getItem('userTwo');
    console.log(JSON.parse(userTwo));
    console.log(userTwo);

}
getUserTwo () 



function handleRem () {
    localStorage.removeItem("user");
}
removeBtn.addEventListener('click', handleRem);

function handleRemTwo () {
    localStorage.removeItem("userTwo")
}
removeBtn.addEventListener('click', handleRemTwo);


function clearAll(){   
     localStorage.getItem("user");
    localStorage.getItem("userTwo")
localStorage.clear()
 
 }
 clearBtn.addEventListener('click' ,clearAll)