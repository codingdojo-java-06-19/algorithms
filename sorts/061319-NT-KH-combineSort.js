// Array: Combine

// Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place?

let sample1 = [1, 3, 5, 7, 9];
//             0  1  2  3  4

let sample2 = [1, 2, 4, 6, 8, 10, 15];
//             0  1  2  3  4  5    6

function combineArrs(inArray1, inArray2) {

    let i = 0;
    let j = 0
    while (i<inArray1.length && j<inArray2.length) {
        if (inArray2[j] < inArray1[i]) {
            stickItAfter(i - 1, inArray1, inArray2[j]);
            j++;
        }
        else {
            i++;
        }
        }
    while (j < inArray2.length) {
        inArray1.push(inArray2[j]);
        j++;
    }
    return inArray1;
} 

    function stickItAfter(indexBefore, inArray, inValue) {
        
        for (i = inArray.length - 1; i >= indexBefore; i--) {
            //if we are not to indexBefore
                inArray[i + 1] = inArray[i];
            }
        inArray[indexBefore+1]=inValue;
        return inArray
}

//console.log(stickItAfter(2, sample2, "banana"));


result = combineArrs(sample1, sample2);
console.log(result);






