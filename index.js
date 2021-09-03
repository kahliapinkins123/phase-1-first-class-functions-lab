// Code your solution in this file!

function returnFirstTwoDrivers(drivers){
    const firstTwo = function(){
        const array = [];
        for(let i=0; i<2; i++){
            array.push(drivers[i]);
        }
        return array;
    }
    return firstTwo();
}

function returnLastTwoDrivers(drivers){
    const lastTwo = function(){
        const array =[];
        for(let i=(drivers.length-2); i<drivers.length;i++){
            array.push(drivers[i]);
        }
        return array;
    }
    return lastTwo();
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(mult){
    return function(fare){
       return mult*fare;
    }
}

const multiplier = num => createFareMultiplier(num);

const fareDoubler = fare => multiplier(2)(fare);

const fareTripler = fare => multiplier(3)(fare);

function selectDifferentDrivers(arrayOfDrivers, fn){
    return fn(arrayOfDrivers);
}