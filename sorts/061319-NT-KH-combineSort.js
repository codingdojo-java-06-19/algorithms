// Array: Combine

// Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place?

let sample1 = [1, 3, 5, 7, 9];
//             0  1  2  3  4

let sample2 = [2, 4, 6, 8, 10];
//             0  1  2  3  4  5

function combineArrs(inArray1, inArray2) {
    //loop through inArray1 then use inner array to scan through inArray2

    let index1 = 0;
    let index2 = 0;

    //just looking inArray2 when i=2, and the value is 6
    let i = 2;

    for (i = 0; i < inArray2.length; i++){
        for (j = 0; j < inArray1.length; j++) {
            if ((inArray1[j]) < inArray2[i] && (inArray1[j + 1] > inArray2[i])) {
                stickItAfter(j, inArray1, inArray2[i]);
                console.log(j)
            }
        }
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






