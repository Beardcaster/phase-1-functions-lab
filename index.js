function distanceFromHqInBlocks(location){
    let distanceInBlocks;
    distanceInBlocks = 42 - location;
    distanceInBlocks = Math.abs(distanceInBlocks);
    return distanceInBlocks;
}

//block is 264 ft

function distanceFromHqInFeet(location){
    let distanceFromHq = distanceFromHqInBlocks(location) * 264;
    return distanceFromHq;
}

function distanceTravelledInFeet(start, destination){
    let chargeableDistance = (start - destination) * 264;
    chargeableDistance = Math.abs(chargeableDistance);
    return chargeableDistance;
}

function calculatesFarePrice(start, destination){

    let chargeableDistance = distanceTravelledInFeet(start, destination);
    let charges;

    if (chargeableDistance < 400){
        charges = 0;
    } else if (chargeableDistance <= 2000){

        charges = (chargeableDistance - 400) * 0.02;

    } else if (chargeableDistance <= 2500){
        charges = 25;
    } else {
        return "cannot travel that far";
    }

    return(charges);
}

calculatesFarePrice(45,44);

//if (Math.abs(rawCharges) != rawCharges) {
//        charges = 0;
//    } else {
//        charges = rawCharges * 0.02;
//   }