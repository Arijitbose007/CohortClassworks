function timeOuting(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Arijit")},2000)
    })
    return p;
}

async function result(){
    const value = await timeOuting();
    console.log(value);
}

result();
console.log("BOSE"); //Samjhe?