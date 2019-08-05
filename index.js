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
        debugger;
    //PseudoCode:    
        // return (horizantalBegin - horizontalEnd) + (verticalBegin - verticalEnd) -- Abs. Value
        let horizantalDiff = Math.abs(this.beginningLocation.horizontal - this.endingLocation.horizontal)
        let verticalDiff = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
        return horizantalDiff + verticalDiff
    }
}


let route = new Route(
    { horizontal: '1st Avenue', vertical: '34' },
    { horizontal: 'Park', vertical: '34' }
  );
route.blocksTravelled()