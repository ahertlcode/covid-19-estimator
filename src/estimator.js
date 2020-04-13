const covid19ImpactEstimator = (data) => {

    // declare variables to use
    let impact = {};
    let severeImpact = {};
    let days, factor;

    // convert timeToElapse to days base on
    // supplied periodType
    if(data.periodType == "days"){
        days = data.timeToElapse;
    }else if(data.periodType == "weeks"){
        days = data.timeToElapse*7;
    }else if(data.periodType == "months"){
        days = data.timeToElapse*30;
    }

    // derive factor from days estimate
    // doubles every 3 days, so you'd have to multiply it by
    // a factor of 2. where factor is 10 for a 30 day
    // duration (there are 10 sets of 3 days in a perioid of
    // 30 days)
    factor = parseInt(days/3);
    availableBedsCovid19 = 0.35 * data.totalHospitalBeds;

    //impact
    impact.currentlyInfected = data.reportedCases*10;
    impact.infectionsByRequestedTime = impact.currentlyInfected*(Math.pow(2, factor));
    impact.severeCasesByRequestedTime = 0.15*impact.infectionsByRequestedTime;
    impact.hospitalBedsByRequestedTime = availableBedsCovid19 - impact.severeCasesByRequestedTime;

    //severe impact
    severeImpact.currentlyInfected = data.reportedCases*50;
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected*(Math.pow(2, factor));
    severeImpact.severeCasesByRequestedTime = 0.15*severeImpact.infectionsByRequestedTime;
    severeImpact.hospitalBedsByRequestedTime = availableBedsCovid19 - severeImpact.severeCasesByRequestedTime;
    }
export default covid19ImpactEstimator;
