var oldDate = new Date(2016,0,1);
var oldDateWithTime = new Date(2016, 0, 1, 17, 10, 30); // date and Time
var dateToday = new Date(); // current time
var elapsed = dateToday - oldDate; 
oldDateWithTime.getFullYear() // 2016
oldDateWithTime.getMonth() // 0 Jan; month start with from 0 
oldDateWithTime.getDate() // day 1 
oldDateWithTime.getDay() // 5 Friday; Sunday is 0 
oldDateWithTime.getHours() // 17: 5pm; GMT+0300 
oldDateWithTime.getUTCHours() // UTC timezone
oldDateWithTime.toString() // Fri Jan 01 2016 17:10:30 GMT+0300 (Arabian Standard Time)
oldDateWithTime.toUTCString() // Fri, 01 Jan 2016 14:10:30 GMT
oldDateWithTime.toLocaleDateString() // 01/01/2016
oldDateWithTime.toLocaleTimeString() // 05:10:30 PM
oldDateWithTime.toISOString() // 2016-01-01T14:10:30.000Z