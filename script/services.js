//using jQuery
//constructor
function Service(description,price){


}
//register and display
function register() {
    console.log("A new service was added");
}
function init() {
    $("#registerBtn").on("click",register);

}
window,onload=init;