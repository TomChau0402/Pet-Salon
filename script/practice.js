var globalVariable = "I am global scope";

function myFunction() {
    var localVariable = "I am local scope"
    console.log(globalVariable); 
    console.log(localVariable);
    if (true) {
        let blockVariable = "I am a block variable";
        console.log(blockVariable);
    }

}



myFunction()
