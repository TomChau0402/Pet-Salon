function displayPets() {
    console.log("displayPets function");
    let petsSection=document.getElementById("pets");
    let result="";

    for (let index = 0; index < pets.length; index++) {
        let pet =pets[index];
        console.log("pet: ", pet);
        

        result +=`
            <div id="${index}" class="card">
                <div>
                    <h5> ${pet.name} </h5>
                    <h6> ${pet.breed} </h6> 
                   <p> ${pet.gender}</p>
                    <p> ${pet.age}</p>
                    <p> ${pet.service} </p>
                </div>
            </div>
        `
    }

    petsSection.innerHTML = result;
}