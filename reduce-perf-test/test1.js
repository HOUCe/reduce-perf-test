// 另外一种，自己构造数组
let arr = Array.from(Array(10000).keys());
let arr1 = arr.map((item, index) => {
    return {
        user: index,
        age: (Math.floor( Math.random() * 100))
    }
})

console.time('singlePass');
// 试验将年龄在20-30范围内的项目，抽出来其user作为一个数组
let ageArray = arr1.filter((item) => item.age >= 20 && item.age <= 30);
let nameArray = ageArray.map((item) => {
    return `${item.user} `
})
console.timeEnd('singlePass');

console.time('reduceMethod');
let nameArray2 = arr1.reduce((accumulator, item) => {
    if (item.age >= 20 && item.age <= 30) {
        accumulator.push(`${item.user} `);
    }
    return accumulator
}, []);
console.timeEnd('reduceMethod');