function isPrime(num){

    if(num < 2){
        console.log("Isn't prime")
        return false;
    }

    for(let i =2; i < num; i++){
        if(num % i === 0){
            console.log("Isn't prime")
            return false;
        }
    }

    console.log("Is prime");
    return true;


}

module.exports = { isPrime };
