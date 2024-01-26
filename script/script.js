const formNode = document.querySelector('#addForm');
const  personalDetails= [];

formNode.addEventListener("submit", (event) => {
    event.preventDefault();
    const {lastName, firstName, age} = event.target;
    const detail = {
        lastName: lastName.value,
        firstName: firstName.value,
        age: age.value
    }
    personalDetails.push(detail); 
    rerender();
    event.target.reset();
})
function getDetailsNode(lastName, firstName, age){
    const container = document.createElement("div");
    const lastNameNode = document.createElement("p");
    const firstNameNode = document.createElement("p");
    const ageNode = document.createElement("p");

    lastNameNode.innerText = lastName;
    firstNameNode.innerText = firstName;
    ageNode.innerText = age;

    container.classList.add("item")
    container.style.backgroundColor = "#f1f2f6";
    container.style.color = "#ff6b81";
    container.append(lastNameNode, firstNameNode, ageNode);
    return container;
}

function rerender(){
    const container =document.querySelector("#cardContainer");
    container.innerText = '';
    personalDetails.forEach(({lastName, firstName, age}) => container.append(getDetailsNode(lastName, firstName, age)));
}