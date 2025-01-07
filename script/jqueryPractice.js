console.log("Welcome to jquery");

//JS vs jQuery
//getting an element
document.getElementById("results");
$("#results");
document.getElementsByTagName("p");
$("p");

document.getElementsByClassName("with-border");
$(".with-border");

//ID SELECTORS
let redParagraph = $("#red").css("background","red").css("color","white");
console.log("my red paragraph",redParagraph);

let blueParagraph = $("#blue").css("background","blue").css("color","white");

//CLASS SELECTOR
let myParagraphWithBorder = $(".with-border");

myParagraphWithBorder.css("border","5px dashed yellow");

myParagraphWithBorder.click(function () {
    console.log("Clicked");
    $(this).addClass("bg-gray");

});

//TAG SELECTOR
let paragraph = $("p");
paragraph.css("cursor", "pointer");

//SIMPLE AND COMMMON FUNCTION
function register() {
    let testEntry = $("testInput").va(); //get and store info
    $("#results").append(`<li>${testEntry}</li>`); //display the info
    
}
//EVENT
$("#registerBtn").on(`click`,register)

//SIMPLE AND COMMON FUNCTION
function clickMe(params) {
    console.log("Click me");

    $("p:first").hide();
    //S ("p:first").show()
    $("p:last").css("border","3px solid black");
}
$("#newBtn").on("click",clickMe);