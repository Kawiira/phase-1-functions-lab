// Code your solution in this file!
    //returns the number of blocks given a value
  function distanceFromHqInBlocks(pickUpLocation) {

    let dist = pickUpLocation - 42
    return Math.abs(dist)

  }
  console.log("42nd street, 50th street");


  function distanceFromHqInFeet(someValue) {
   let dist =  distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return dist * 264
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let dist = Math.abs(destination - start)
    return dist * 264
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let dist = distanceTravelledInFeet(start,destination)
    if(dist < 400){
      return 0
    }else if(dist >=400 && dist < 2000){

      let d = dist -400

      return d * 2/100

    }else if(dist >=2000 && dist < 2500){

      return 25

    }else {
      return 'cannot travel that far'  
    }
  }
  