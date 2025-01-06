const date = new Date()
console.log(date.toString())//Sun Jan 05 2025 20:02:06 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString())//Sun Jan 05 2025
console.log(date.toISOString())//2025-01-05T20:03:24.525Z
console.log(date.toJSON())//2025-01-05T20:03:24.525Z
console.log(date.toLocaleDateString())//1/5/2025
console.log(date.toLocaleString())// 1/5/2025, 8:05:16 PM
console.log(date.toTimeString())//20:05:47 GMT+0000 (Coordinated Universal Time)
console.log(date.toUTCString())//Sun, 05 Jan 2025 20:06:19 GMT

let myDate = new Date(2023, 15, 23, 5, 3)
console.log(myDate.toString())



let myDateFormatted = new Date("2024-09-19")
console.log(myDateFormatted.toString())


let myDateFormattedIndia = new Date("19-09-2024")
console.log(myDateFormatted.toString())



let myTimestamp = new Date();

const convertedTime = myTimestamp.toLocaleDateString('en-US', {
    timeZone: "america/chicago",
    weekday: "long",
    hour: "2-digit",
    day: "2-digit",
    minute: "2-digit"
});

console.log(convertedTime)