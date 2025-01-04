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
function Pet(name, age, gender,breed, service) {
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}
//create the variable for the HTML element
let inputName = document.getElementById("txtName")
let inputAge = document.getElementById("txtAge")
let inputGender = document.getElementById("txtGender")
let inputBreed = document.getElementById("txtBreed")
let inputService = document.getElementById("txtService")

function register() {
    let newpet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value); //create the new obj
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
}
function deletepet(petId) {
    console.log("Pet id:", petId);
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    displayRow();
    displayInfo()

}
function init(){
//create 3 pets
    let pet1 = new Pet("Scooby",60,"male","Dane","Grooming");
    let pet2 = new Pet("Tooby",50,"female","Poodle","Vaccines");
    let pet3 = new Pet("Bobby",80,"male", "Boxer", "Grooming");
    pets.push(pet1,pet2,pet3);

    displayRow();
}
window.onload=init; //wait to render the HTML