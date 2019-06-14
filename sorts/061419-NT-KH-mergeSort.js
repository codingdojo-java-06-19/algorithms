// Array: mergeSort

// Use the combineArrs() function above to construct mergeSortArr() for an unsorted array. What are the run-time and space complexities of your mergeSortArr solution?

//steps to recursion:
// 1. need a base case:  how do I stop
// 2.  forward progress:  how do we get to the next one...how to get idx to meet that condition
// 3.  Need recursion...need to call self



let sample2 = [17, 2, 22, 6, 12, 10, 15];
//             0  1  2  3  4  5  6   7
function mergeSortArr(inArray1) {
    //split array using Math.floor(inArray1.length/2)
    //continue until all resulting arrays have only one element
    //if two, sort them...if one, then do nothing...when finished use mergeSort from yesterday
    //for recursion base case is when length of any/all arrays is less than 2
    if (inArray1.length < 2) {
        return inArray1;
    }
    let midPoint = Math.floor(inArray1.length/2)
    //split some arrays
    //newArray1 = 0 to midPOint; newArray2 = midPoint1 to inArray1.length



}

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

result = mergeSortArr(sample2);
console.log(result);

