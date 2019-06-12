// Array: Selection Sort

// For review, create a function that uses SelectionSort to sort an unsorted array in-place.

testArray = [8, 5, 2, 6, 9, 3, 5, 4, 0, 7]
//           0  1  2  3  4  5  6  7  8  9
//           0  5  2  6  9  3  5  4  8  7



function selectionSort(inArray) {
    let j = 0
    let minIndex=0;
 
    //master for goes here
    for (let j = 0; j < inArray.length; j++) {
        minIndex = j;
        for (let i = j; i < inArray.length; i++) {
            if (inArray[i] < inArray[minIndex]) {
                minIndex = i
                //console.log("the minimum is now" + inArray[minIndex]);
            }
        }

            let temp = inArray[minIndex];  
            inArray[minIndex] = inArray[j];
            inArray[j] = temp;
            

        //end master for loop

    }
    console.log("array is now:  ", inArray);
    return inArray;
    






}


result = selectionSort(testArray);
console.log(result);