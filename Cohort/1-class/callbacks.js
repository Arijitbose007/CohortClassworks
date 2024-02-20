function arithmetic(a,b,calculation){
    const ans = calculation(a,b);
    return ans;
}

function sum(p,q){
    return (p+q);
}

function sub(p,q){
    return (p-q);
}

const finalAns = arithmetic(5,6,sum);
console.log(finalAns);

// Anonymous functions are those functions that does not have a name and are used when it is called directly and is defined in spot.