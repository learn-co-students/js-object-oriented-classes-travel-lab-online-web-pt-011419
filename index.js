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
        
    }
}


driver = new Driver('Alfie', 'Jan 1, 1995');
driver.yearsExperienceFromBeginningOf(2017);