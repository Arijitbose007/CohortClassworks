function makePromise(){
    let p = new Promise(function(resolve){
        setTimeout(resolve,2000)
    })
    return p;
}

const result = makePromise();
console.log("Before Promises");

result.then(function() {
    console.log("After Promises");
})
