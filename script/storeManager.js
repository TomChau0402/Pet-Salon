function save(item) {
    console.log(item);//obj

    let data = read();
    data.push(item);
    let val = JSON.stringify(data);
    console.log(val); //JSON (string)

    localStorage.setItem("services",val);
}

function read() {
    let data = localStorage.getItem("services")

    if(!data){
        return[];

    }else{
        let list = JSON.parse(data);
        return list
    }
}