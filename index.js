// function superbowlWin(array, key, value) {
//     array.find(function(value) {
//         return value === 'W'
//     }) 
//     if (x === 'W') {
//         return array.find (function(s) {return s === "W"})
//     }
// }

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

function superbowlWin(x) {
    let result = x.find( function(x) { 
        return x.result === 'W' //find an element with W, assign it 'x'
    })
    if (result) { //if result finds a winning date
        return result.year
    } else { //if result doesn't find a winning date
        return undefined
    }
}

console.log(superbowlWin(record));