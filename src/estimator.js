const covid19ImpactEstimator = (data) => {
    let impact = {};
    let severeImpact = {};
    let days, factor;
    if(data.periodType == "days"){
        days = data.timeToElapse;
    }else if(data.periodType == "weeks"){
        days = data.timeToElapse*7;
    }else if(data.periodType == "months"){
        days = data.timeToElapse*30;
    }
    factor = parseInt(days/3);
    impact.currentlyInfected = data.reportedCases*10;
    impact.infectionsByRequestedTime = impact.currentlyInfected*(Math.pow(2, factor));
    severeImpact.currentlyInfected = data.reportedCases*50;
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected*(Math.pow(2, factor));
    }
export default covid19ImpactEstimator;
