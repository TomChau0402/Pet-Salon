function displayRow() {
    console.log("displayPets function");
    let petsSection=document.getElementById("pets");
    let result="";

    for (let i = 0; i < pets.length; i++) {
        let pet =pets[i];
        console.log("pet: ", pet);
        
        result +=`
        <tr id="${i}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td> <button class="btn btn-danger btn-sm" onclick="deletePet(${i})"> Delete</button></td>
        </tr>
        `
        /* 
        result +=`
            <div id="${index}" class="card" col-3 mx-2>
                <div class="card-body">
                    <h5 class="card-title"> ${pet.name} - <span class="text-secodary"${pet.service}></span></h5>
                    <h6> ${pet.breed} </h6> 
                    <p> ${pet.gender}</p>
                    <p> ${pet.age}</p>
                    <button class="btn btn-danger">Delete</button>

                </div>
            </div>
        `*/
    }

    petsSection.innerHTML = result;
    displayInfo();
}

function displayInfo() {
    let total = document.getElementById("total");
    let groomingSpan = document.getElementById("gTotal")
    let groomingCounter = 0

    total.innerHTML=pets.length;
    console.log("total: ", pets.length);

    for(let i=0; i<pets.length;i ++){
        console.log("--pet:",pets[i]);
        if (pets[i].service=="Grooming"){
    
        groomingCounter++;
        }
        groomingSpan.innerHTML = groomingCounter;
    }
function displayTypes() {
    let dogSpan = document.getElementById("dogTotal");
    let dogCounter = 0;

    for (let i=0; i<pets.length; i++){
        console.log("--pet:",pets[i]);
        if(pets[i].type =="Dog"){
            dogCounter++; // increase the value by +1
        }
    }
    
}
    
}