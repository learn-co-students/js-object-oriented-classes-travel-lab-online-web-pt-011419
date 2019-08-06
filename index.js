class Driver{
    constructor(name, startDate){
        this.name = name
        this.startDate = new Date( startDate )
    }

    yearsExperienceFromBeginningOf(year){
        let startYear = this.startDate.getFullYear()
        return year - startYear
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

class Route{
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }
    blocksTravelled(){ 
        let horizantalDiff = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
        let verticalDiff = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
        return horizantalDiff + verticalDiff
    }

    estimatedTime(peakTime){
        if(peakTime){
            return this.blocksTravelled()/2;
        }else{
            return this.blocksTravelled()/3;
        }
    }
}