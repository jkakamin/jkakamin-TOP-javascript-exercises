const leapYears = function(year) {

    //leap year if div by 4, not div by 100, div by 400
    //div 4 = all leap year candidates
    //not div 100 && div 400? leap year
    //

    if(year % 4 == 0){
        if(year % 100 == 0 && year % 400 == 0) return true;
        else if(year % 100 == 0 ) return false;
        else return true;
    } else return false;


};

// Do not edit below this line
module.exports = leapYears;
