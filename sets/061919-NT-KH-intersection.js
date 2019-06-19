// Intersect Sorted Arrays

// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7] , return [2,2,7] .

let sample1 = [1, 2, 2, 2, 7, 8, 9, 12];
let sample2 = [2, 2, 6, 6, 7, 8];
//             0  1  2  3  4

function multiset(inArray1, inArray2) {
    let newArray = [];

    let shorterArray = inArray2.length < inArray1.length? inArray2 : inArray1;
    let i = 0;
    let j = 0;
    while (i < shorterArray.length) {
        console.log("i is:  " + i + " and j is " +j);
        if (inArray2[j] == inArray1[i]) {
            newArray.push(inArray2[j])
            j++;
            i++
        }
        else if (inArray2[j] < inArray1[i]) {
            j++
        }
        else {
           i++;
           // newArray.push(inArray1[i]);
        }
    }
    return newArray;
} 

result = multiset(sample1, sample2);
console.log(result);

















