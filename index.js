// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    return cats.push("Ralph");
}
beforeEach();

function destructivelyPrependCat(){
    return cats.unshift("Bob");
}
beforeEach();

function destructivelyRemoveLastCat(){
    return cats.pop();
}
beforeEach();

function destructivelyRemoveFirstCat(){
    return cats.shift();
}
beforeEach();

function appendCat(name){
    return [...cats, name];
}
beforeEach();

function prependCat(name) {
    return ["Arnold", ...cats]
}
beforeEach();

function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}
beforeEach();

function removeFirstCat(){
    return cats.slice(1, cats.length)
}