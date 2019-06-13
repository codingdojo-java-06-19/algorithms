// Array: Insertion Sort

// Create a function that InsertionSort to sort an unsorted array in-place. What is the run-time complexity? What is the space complexity?

let sampleArray = [2, 1, 8, 11, 7, 12, 6];
//                 0  1  2  3   4  5   6

function insertionSort(inArray) {


    for (let i = 0; i < inArray.length; i++) {  
        const currentValue = inArray[i];
        console.log("current value  is;  " + currentValue);
        let j = i - 1;

        while ( j>=0 && currentValue < inArray[j]) {
            inArray[j+1] = inArray[j];
            j--
        }
        inArray[j + 1] = currentValue;
        console.log(inArray[j + 1]);
        console.log(j + 1);
    }
    return inArray;
    console.log(inArray)
}
result = insertionSort(sampleArray);
console.log(result);

