/* 
  Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
  The maximum time never exceeds 359999 (99:59:59)
  
  You can find some examples in the test fixtures. 
*/

function humanReadable(seconds) {
  if (seconds < 0) return "00:00:00";
  if (seconds > 359999) return "99:59:59";

  const SECONDS_IN_HOUR = 3600; // 60 * 60
  const SECONDS_IN_MINUTE = 60;

  const hours = padZero(Math.floor(seconds / SECONDS_IN_HOUR));
  const remainingSeconds = seconds % SECONDS_IN_HOUR;
  const minutes = padZero(Math.floor(remainingSeconds / SECONDS_IN_MINUTE));
  const secs = padZero(seconds % SECONDS_IN_MINUTE);

  return `${hours}:${minutes}:${secs}`;
}

function padZero(number) {
  return String(number).padStart(2, "0");
}

console.log(humanReadable(-1)); // '00:00:00'
console.log(humanReadable(0)); // '00:00:00'
console.log(humanReadable(59)); // '00:00:59'
console.log(humanReadable(60)); // '00:01:00'
console.log(humanReadable(90)); // '00:01:30'
console.log(humanReadable(3599)); // '00:59:59'
console.log(humanReadable(3600)); // '01:00:00'
console.log(humanReadable(45296)); // '12:34:56'
console.log(humanReadable(86399)); // '23:59:59'
console.log(humanReadable(86400)); // '24:00:00'
console.log(humanReadable(359999)); // '99:59:59'
console.log(humanReadable(360000)); // '99:59:59'
