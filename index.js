// function distanceFromHqInBlocks(someValue) 


function distanceFromHqInBlocks(pickUp) {
return Math.abs(42 - pickUp)
}

function distanceFromHqInFeet(pickUp) {
   return distanceFromHqInBlocks(pickUp) * (264);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}


// function calculatesFarePrice(start, destination) {
//     if (Math.abs((destination-start) * (264)) <= 400) {
//         return 0
//     } 
//     else if (Math.abs((destination-start) * (264)) <= 400)
//   }



function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    let fare;
    if(distanceInFeet < 400){
        fare = 0
        return fare;
    }
    else if(distanceInFeet >= 400 && distanceInFeet <= 2000) {
        fare = (distanceInFeet-400) * 0.02;
        return fare;
//     }
//     else if(distanceInFeet > 2000 && distanceInFeet < 2500) {
//         fare = 25
//         return fare;
//     }
//     else if(distanceInFeet > 2500){
//     fare = "cannot travel that far";
//     return fare;
//     }
    }
    else if(distanceInFeet > 2000 && distanceInFeet < 2500) {
        fare = 25
        return fare;
    }
    else if(distanceInFeet > 2500){
    fare = "cannot travel that far";
    return fare;
    }
}

