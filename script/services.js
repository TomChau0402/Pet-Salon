//using jQuery
//constructor
function Service(description,price){
    this.description=description;
    this.price=price

}
function validService(service) {
    let isValidDes = true;
    let isValidPrice = true;

    if (service.description == "") {
        // if I get here the description is empty
        isValidDes = false;
        $("#txtDes").css("border","1px solid red");
        $("#desRequirementText").show();
    }else{
        $("#txtDes").css("border","1px solid black");
        $("#desRequirementText").hide();
    }

    if (service.price == "") {
        // if I get here the description is empty
        isValidPrice = false;
        $("#txtPrice").css("border","1px solid red");
        $("#priceRequirementText").show();
    }else{
        $("#txtPrice").css("border","1px solid black");
        $("#priceRequirementText").hide();
       
    }
    return isValidDes && isValidPrice; //&& =AND 
}
   
//register and display
function register() {
    console.log("A new service was added");
    let inputDescription = $("#txtDes").val();
    let inputPrice = $("#txtPrice").val();
    let newService = new Service(inputDescription,inputPrice);
    if(validService(newService)){
    save(newService); //this fn is on the storeManager
}
}
function init() {
    $("#registerBtn").on("click",register);
    $("#desRequirementText").hide();
    $("#priceRequirementText").hide();

}
//clear the form
$("#txtDes").val("")
$("#txtPrice").val("")

window.onload=init;