// Merge Sorted Arrays

// Efficiently merge two already-sorted arrays into a new sorted array containing the multiset of all values. Example: given [1,2,2,2,7] and [2,2,6,6,7] , return new array [1,2,2,2,2,2,6,6,7,7] .


let sample1 = [1,   2, 2, 2, 7];
let sample2 = [-5, -3, 6, 6, 7, 33, 55, 66];

sample1 = [1, 2, 2, 2, 7];
sample2 = [2, 2, 6, 6, 7];


function mergeSortedArrays(inArray1, inArray2) {

    let newArray = [];

    let shorterArray = inArray2.length < inArray1.length? inArray2 : inArray1;
    let longerArray = inArray2.length > inArray1.length? inArray2 : inArray1;


    let i = 0;
    let j = 0
    while (i<shorterArray.length) {
        if (inArray2[j] <= inArray1[i]) {
            newArray.push(inArray2[j])
            j++;
        }
        else {
            newArray.push(inArray1[i]);
            i++;
        }
    }

    for (let i = shorterArray.length; i < longerArray.length; i++) {
        newArray.push(longerArray[i]);
    }
    return newArray;
} 






result = mergeSortedArrays(sample1, sample2);
console.log(result);









