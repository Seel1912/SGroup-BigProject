// const arr = [5, 7, 8, 9, 2, 8, 7, 6, 21, 48, 20, 52, 53]
// function sliceArr(num) {
//     if (arr.length % 2 == 0) {
//         return num = arr.length / 2
//     } if (arr.length % 2 != 0) {
//         return num = (arr.length - 1) / 2
//     }
// }
// function findOppositeNum(pos) {
//     if (findPosition() < sliceArr()) {
//         return pos = sliceArr() + findPosition()
//     } if (findPosition() > sliceArr()) {
//         return pos = findPosition() - sliceArr()
//     } else {
//         return false
//     }
// }
// let a = findOppositeNum()
// function findPosition() {
//     return arr.indexOf(52)
//     //Nhap code o day
// }
// console.log(arr[a])


// create function
// Input hoang
// out hhoonngg
function checkStr(str) {
    let str2 = ""
    for (let i = 0; i < str.length; i++) {
        str2 = str2 + str[i] + str[i]
    }
    return str2
}
function checkTime(times, cb) {
    let result = ""
    for (let i = 0; i < times; i++) {
        result = result + checkStr("hoang")
    }
    return result
}
console.log(checkTime(9))




