function openNowInit(data) {
    if (data === undefined || data === []) {
        return
    }
    let d = new Date(); // current date and time

    //lets assume institute is closed right now
    data.openedNow = false;

    const weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";
    let day = weekday[d.getDay()];
    // console.log(day)

    let dayNTimeOfOperation = data.dayAndTimeOfOperation;
    let todaysHours;
    dayNTimeOfOperation.forEach(obj => {
        if (obj.day) {
            if (obj.day.toLowerCase() == day) {
                todaysHours = obj;
            }
        }
    });
    // console.log(todaysHours);
    if (todaysHours) {
        let toTime = convertTo24Hours(todaysHours.toTime);
        let fromTime = convertTo24Hours(todaysHours.fromTime);
        let currentHours = d.getHours();
        if (fromTime && toTime) {
            if (toTime.hours && fromTime.hours) {
                if (currentHours <= toTime.hours && currentHours >= fromTime.hours) {
                    data.openedNow = true;
                }
            }
        }
    }

    //get current hours and minutes

    // console.log(dayNTimeOfOperation);
}

//for converting a
function convertTo24Hours(timeToConvert) {
    if (timeToConvert === undefined || timeToConvert === '') {
        return
    }
    let time = timeToConvert;
    if (time.slice(-2) == 'AM' || time.slice(-2) == 'PM') {
        let hours = Number(time.match(/^(\d+)/)[1]);
        let minutes = Number(time.match(/:(\d+)/)[1]);
        let AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM == "PM" && hours < 12) hours = hours + 12;
        if (AMPM == "AM" && hours == 12) hours = hours - 12;
        return {hours: hours, minutes: minutes}
    } else {
        let temp = time.split(':');
        let hours = parseInt(temp[0]);
        let minutes = parseInt(temp[1]);
        return {hours: hours, minutes: minutes}
    }
}