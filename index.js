class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = startDate
  }

  yearsExperienceFromBeginningOf(endDate) {
    return parseInt(endDate) - parseInt(this.startDate.split(" ")[2])
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let startingHorizontal = eastWest.indexOf(this.beginningLocation.horizontal)
    let endingHorizontal = eastWest.indexOf(this.endingLocation.horizontal)

    let horizontalBlocks = Math.abs((startingHorizontal + 1) - (endingHorizontal + 1))

    let verticalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    return verticalBlocks + horizontalBlocks
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
