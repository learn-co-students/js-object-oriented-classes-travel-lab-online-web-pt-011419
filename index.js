let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];




class Driver {
constructor(name, startDate) {
this.name = name;
this.startDate = new Date(startDate);
}


yearsExperienceFromBeginningOf(year) {
  let endDate = new Date(year, 1, 1)
let diff = endDate - this.startDate
let totalDiff = diff / (1000 * 365 * 60 * 60 * 24)
return Math.round(totalDiff);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  avenuesInNumbers(avenue) {
    return eastWest.indexOf(avenue);
  }
  blocksTravelled() {
    let horizontal =
    this.avenuesInNumbers(this.endingLocation.horizontal) -
    this.avenuesInNumbers(this.beginningLocation.horizontal);
    let vertical =
    this.endingLocation.vertical - this.beginningLocation.vertical;
    return Math.abs(horizontal) + Math.abs(vertical)
  }
  estimatedTime( peak ) {
    if ( peak ) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
