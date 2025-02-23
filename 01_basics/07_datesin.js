// Dates

let myDate = new Date();
console.log(myDate); // => 2025-02-23T08:45:56.053Z
console.log(myDate.toString()); // => Sun Feb 23 2025 08:45:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // => Sun Feb 23 2025
console.log(myDate.toLocaleString()); // => 2/23/2025, 8:45:56 AM
console.log(typeof myDate); // => object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate); // => 2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString()); // => Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString()); // => 1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("2023-01-14"); // yy-mm-dd
console.log(myCreatedDate2.toLocaleString()); // => 1/14/2023, 12:00:00 AM

let myCreatedDate3 = new Date("01-14-2023"); // mm-dd-yy
console.log(myCreatedDate2.toLocaleString()); // => 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // => 1740303710111   this value is in milisecond
console.log(myCreatedDate3.getTime()); // => 1673654400000   this value is in milisecond

console.log(Date.now() / 1000); // => 1740304018.744  in seconds
console.log(Math.floor(Date.now() / 10000)); // => 174030405  in seconds

let newDate = new Date();
console.log(newDate); // => 2025-02-23T09:49:45.384Z
console.log(newDate.getMonth() + 1); // => 2    Feb hai
console.log(newDate.getDay()); // => 0     0 means Sunday and go to 6 Saturday

// You can more customize the tolocaleString format
newDate.toLocaleString("default", {
  weekday: "long",
});
