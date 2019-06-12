// Array: Insertion Sort

// Create a function that InsertionSort to sort an unsorted array in-place. What is the run-time complexity? What is the space complexity?

let sampleArray = [2, 1, 8, 11, 7, 12, 6];
//                 0  1  2  3   4  5   6

function insertionSort(inArray) {

    //h
    for (let i = 1; i < inArray.length; i++) {  
        const currentValue = inArray[i];
        console.log("current value  is;  " + currentValue);
        //if greater than Left, then continue or break
        if (currentValue < inArray[i - 1]) {

            for (let j = i-1; j>=0; j--) {
                //let's compare this held/curent value with each value in this loop and when find one that is less than drop it in
                if (currentValue < inArray[j]) {
                    //need to place inArray[k] in inArray[j-1], but that also means need to actually do a swap of some kind...can't just stick it in
                    inArray[j+1] = inArray[j];
                }
                else {
                    console.log(inArray[j + 1]);
                    console.log(j + 1);
                    inArray[j] = currentValue // the checked value is now bigger, so let's put it in the old spot
                    break;
                }
            }
            
        }
    }
    
    console.log(inArray)
}
result = insertionSort(sampleArray);
console.log(result);



    //Array is divided into two portions:  unsorted and sorted....initially it is all unsorted, but the sorted grows from the left while the unsorted shrinks from the right
    //need to iterate the array (really just the unsorted portion) for placement with each iteration placing a new value selected fro the unsorted portion
    //need to iterate the array (really just the sorted portion) to find the slot for the held value
    //held value will always be the first value in the unsorted portion of the array

    //will keep a held value for duration of either the placement iteration, or the decision iteration

    //is the current value out of order..if so, then slot it
  
    
    //this is iterating the unsorted portion, so starting point will increase with each iteration 0, 1, 2...