let emptyArray: (string| number| boolean)[] = [];
let aString = emptyArray.push('Good', 5, false); 
// console.log (emptyArray)

// A function that accepts two strings and concatenates
function concat (firstName:string, lastName:string):string {
    return `My first name is ${firstName} and last name is ${lastName}`
}
// console.log(concat('John', 'Doe'));
let arr:number[] = [1,2,3,4,5,6]
function sumOfArray(arr:number[]):number{
    let i:number = 0;   //where to store the array
    for (let j:number=0; j < arr.length; j++){
        i+=arr[j]   // i = i + arr[j]
    }
    return i;
}
console.log(sumOfArray(arr));
