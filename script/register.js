console.log("Register");

let pets =[]; //empty array
//object literal
let petSalon ={
    name: "The Fashion Pet",
    address:{
        street: "Palm Ave",
        zip: "22333"
    }, 
    phone: "666-666-6666"
}
// create constructor the first letter is capitilized / parameters is the ()
function Pet(name, age, gender,breed, service,type) {
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}
//create the variable for the HTML element
let inputName = document.getElementById("txtName")
let inputAge = document.getElementById("txtAge")
let inputGender = document.getElementById("txtGender")
let inputBreed = document.getElementById("txtBreed")
let inputService = document.getElementById("txtService")
let inputType = document.getElementById("txtType")

function register() {
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value); //create the new obj
    pets.push(newPet); // push the newPet into the array
    console.log(pets); //display the array
    displayRow();
    clearForm();
}
function clearForm() {
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtType").value="";
}
function deletePet(petId) {
    console.log("Pet id:", petId);
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    displayRow();
    displayInfo()

}
function getServices() {
    console.log("getServices function")
    
    let services = read()
    console.log(services)
 let option = "";
    for(let i=0; services.length; i++){
        let service =services[i];

        option +=
        `
        <option value=""> -${service.price}</option>
        `
        $("#txtServices").append(option);
    }
}
function init(){
//create 3 pets
    let pet1 = new Pet("Scooby",60,"male","Dane","Grooming");
    let pet2 = new Pet("Tooby",50,"female","Poodle","Vaccines");
    let pet3 = new Pet("Bobby",80,"male", "Boxer", "Grooming");
    pets.push(pet1,pet2,pet3);

    displayRow();
    getServices();
}
window.onload=init; //wait to render the HTML
function displayRow() {
    let cardsSection = document.getElementById("pets");
    let result = "";
    
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        result += `
            <tr id="${i}">
                <td scope="row">${i + 1}</td>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.type}</td>
                <td>${pet.service}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>;
            </tr>
        `;
      
    }
}