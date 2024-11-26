/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

function timeConversion(s) {
    let [hrs, mins, secs] = s.slice(0, -2).split(":").map((val, index) => index === 0 ? parseInt(val, 10) : val);
    let tod = s.slice(-2);

    if (tod === "AM") {
        hrs = hrs === 12 ? 0 : hrs; // Convert 12 AM to 0
    } else {
        hrs = hrs === 12 ? 12 : hrs + 12; // Keep 12 PM as 12, add 12 to other PM hours
    }

    return `${hrs.toString().padStart(2, "0")}:${mins}:${secs}`;
}