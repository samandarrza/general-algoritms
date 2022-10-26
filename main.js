// 1) Verilen duplicate array daxilindən duplicate olanları silib unique array formasına sal
//ver1
let arr1 = [1,2,54,67,1,2,54];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
        arr2.push(arr1[i]);
    }
}
console.log(arr2);

//ver2
let arr3 = [1,2,54,67,1,2,54];
let arr4 = [];
arr3.sort();
for (let i = 0; i < arr1.length; i++) {
    if (arr3[i] != arr3[i-1]) {
        arr4.push(arr3[i]);
    }
}
console.log(arr4);

//ver3
let arr5 = [1,2,54,67,1,2,54];
const result = arr5.reduce((acc,num)=>{
    if (!acc.includes(num)) {
        acc.push(num);
    }
    return acc;
}, [])
console.log(result);

//ver4
let arr6 = [1,2,54,67,1,2,54];
console.log([...new Set(arr6)]);

// 2) Verilen array daxilinden musbet olanlari kvadratından ibaret yeni array return et
//ver1
const numbers1 = [2,1,-5,4,7,-3,6];
const newnum1 = numbers1.filter(number => number > 0).map(number => number * number);
console.log(newnum1);

//ver2
const numbers2 = [2,1,-5,4,7,-3,6];
const newnum2 = numbers2.reduce((acc,number)=>{
    if (number > 0) {
        acc.push(number*number)
    }
    return acc
}, [])
console.log(newnum2);

// 3) Verilen stringi tersine çevir
//ver1
let str1 = "Azərbaycan";
const reverse1 = [...str1].reduce((acc, char)=>char+acc,"");
console.log(reverse1);

//ver2
let str2 = 'Azerbaycan';
let reverse2 = str2.split('').reverse().join('');
console.log(reverse2);