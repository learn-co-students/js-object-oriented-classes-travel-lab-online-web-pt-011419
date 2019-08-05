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
    constructor(name, startDate){
        this.name = name
        this.startDate = new Date(startDate)
    }

    // startDate(date) {
    //     return new Date(date)
    // }

    yearsExperienceFromBeginningOf(year) {
        let yearNow = new Date(year, 1, 1)
        // let yearNow = dateNow.getUTCFullYear()
       
        return parseInt(((yearNow - this.startDate)/3.154e+7)/1000)
    }
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTravelled() {
        let horizontal = eastWest.indexOf(this.endingLocation.horizontal)-eastWest.indexOf(this.beginningLocation.horizontal);
        let vertical = (this.endingLocation.vertical) - (this.beginningLocation.vertical)
        return horizontal + vertical
        // north and south - simple math
        // eastwest doing subtraction with the array's index
    }

    estimatedTime(peakHours) {
        if (peakHours) {
            return this.blocksTravelled()/2
        }
        else {
            return this.blocksTravelled()/3
        }
    }
}
