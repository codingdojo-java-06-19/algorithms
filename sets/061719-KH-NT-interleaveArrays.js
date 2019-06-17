// Interleave Arrays

// Given two unsorted arrays, create a new array containing the elements of both, resulting in an unsorted merge of all values. When populating the new array alternate (interleave) values between the two arrays until one is exhausted, then include all of the other. Example: given [77,22,11,22] and [2,6,7,2,6,2] , return [77,2,22,6,11,7,22,2,6,2] .


const sample1 = [77, 22, 11, 22];
    
const sample2 = [2,  6,  7,  2,  8,  2, 99, 202];

function interleaveArrays(inArray1, inArray2) {

    let newArray = [];
    let i = 0;
    let shorterArray = inArray2.length < inArray1.length? inArray2 : inArray1;
    let longerArray = inArray2.length > inArray1.length? inArray2 : inArray1;
    while (i<shorterArray.length) {
        //alternate pushes i
        newArray.push(inArray1[i], inArray2[i]);
        i++
    } // end while checking for end of arrays
    //put remainder of longer array in
    //console.log(newArray);
    //console.log(shorterArray.length);
    //console.log(longerArray);
    //console.log(longerArray[4]);

    for (let i = shorterArray.length; i < longerArray.length; i++) {
        // console.log("should be 4 the first time" +i);
        // console.log(longerArray[i])
        newArray.push(longerArray[i]);
    }
    return newArray;


} // end interleaveArrays

result = interleaveArrays(sample1, sample2);
console.log(result);

