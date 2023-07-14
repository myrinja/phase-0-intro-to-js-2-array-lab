// Write your solution here!
 let cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push('Ralph');
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
cats.shift();
}
function appendCat(Broom){
    let newcats = [...cats, "Broom"]
    return newcats;

}
function prependCat(Arnold){
    let newcats2 =["Arnold", ...cats] 
    return newcats2;
}
function removeLastCat(){
    let newcats2 =[ ...cats] 
    newcats2.pop()
    return newcats2;
}
function removeFirstCat(){
    let newcats2 =cats.slice(1)
    return newcats2;
}
