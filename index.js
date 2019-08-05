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

driver = new Driver('Alfie', 'Jan 1, 1995');
driver.yearsExperienceFromBeginningOf(2017);