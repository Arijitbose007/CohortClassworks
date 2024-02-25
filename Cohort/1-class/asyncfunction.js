

function iteration(number){
    let ans = 0;
    for(let i=0;i<number; i++){
        ans = i++;
    }
    console.log(ans);
}

function iterator(){
    return iteration(100);
}

setTimeout(iterator,2000);  //async function fs.readFile is another asyn f(n)
console.log("Hello Guys");  // later
