//feetToMile
function feetToMile(feet){
    let mile = feet / 5280 ;
    if(feet<0){
       console.log(`Distance cannot be negative`);
       return -1;
    }
    else{
        let result = mile.toFixed(2);
        return result;
    }
}
let firstTest = feetToMile(43657);
console.log(`The distance is ${firstTest} miles`);
let secondTest = feetToMile(-9);
console.log(`The distance is ${secondTest} miles`);



//woodCalculator
function woodCalculator(chair, table, bed){
     let chairWood = 1 * chair;
     let tableWood = 3 * table;
     let bedWood   = 5 * bed;
     let totalWood = chairWood + tableWood + bedWood;
     if(chairWood<0 || tableWood<0 || bedWood<0){
         console.log(`Invalid Input`);
         return -1;
     }
     else{
         return totalWood;
     }
}
let firstWoodTest = woodCalculator(-2, 2, 2);
console.log(`Needed amount of wood is ${firstWoodTest} cubic feet`);
let secondWoodTest = woodCalculator(20, 21, 22);
console.log(`Needed amount of wood is ${secondWoodTest} cubic feet`);



//brickCalculator
function brickCalculator(floor){
    if(floor <= 0){
        console.log(`Invalid Input`);
        return -1
    }
    else if(floor>=1 && floor<=10){
        let firstCount = floor * 15 * 1000;
        return firstCount;
    }
    else if(floor>=11 && floor<=20){
        let leftFloors = floor - 10; 
        let firstCount = 10 * 15 * 1000;
        let secondCount = leftFloors * 12 * 1000;
        let totalBricks = firstCount + secondCount;
        return totalBricks;
    }
    else if(floor>20){
        let leftFloors = floor - 20;
        let firstCount = 10 * 15 * 1000;
        let secondCount = 10 * 12 * 1000;
        let thirdCount = leftFloors * 10 * 1000;
        let totalBricks = firstCount + secondCount + thirdCount;
        return totalBricks;
    }

}
let testOne = brickCalculator(-25);
console.log(`Total amount of bricks needed is ${testOne}`);
let testTwo = brickCalculator(17);
console.log(`Total amount of bricks needed is ${testTwo}`);
let testThree = brickCalculator(9);
console.log(`Total amount of bricks needed is ${testThree}`);
let testFour = brickCalculator(45);
console.log(`Total amount of bricks needed is ${testFour}`);



//tinyFriend
function tinyFriend(friendsName){
    let index = friendsName[0];
    for(let i=0; i<friendsName.length; i++){
        let currentIndex = friendsName[i];
        if(currentIndex.length < index.length){
            index = currentIndex;
             }
        }
    if(friendsName == 0){
        console.log(`The array is EMPTY!`);
        return -1;
    }
    else{
        return index;
    }
}
let arrayOne = tinyFriend([`afi`,`tazoar`,`shafayat`]);
console.log(`The shortest name is ${arrayOne}`);
let arrayTwo = tinyFriend([`sadat`,`rafi`,`afi`]);
console.log(`The shortest name is ${arrayTwo}`);
let arrayThree = tinyFriend([`rifat`,`alif`,`shafayat`]);
console.log(`The shortest name is ${arrayThree}`);
let arrayNull = tinyFriend([]);
console.log(`The shortest name is ${arrayNull}`);