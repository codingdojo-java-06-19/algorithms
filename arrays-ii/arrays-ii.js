function average(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
       sum += arr[i] 
    }
    return sum / arr.length  
}

function sum(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

function balancePoint(arr){
    var sumL = 0
    for(var i = 0; i < arr.length; i++){
        sumL += arr[i]
        var sumR = 0
        for(var j = i + 1; j < arr.length; j++){
            sumR += arr[j]
        }
        if(sumR === sumL){
            return true
        }
    }
    return false
}

testArr1 = [1,2,3,4,10] 
testArr2 = [1,2,4,2,1]
console.log(balancePoint(testArr1))
console.log(balancePoint(testArr2))

function binarySearch(arr, value){
    var start = 0
    var end = arr.length - 1
    while(start <= end){
        var mid = Math.floor((start + end) / 2)
        if(arr[mid] == value){
            return true
        } else if(arr[mid] < value) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false       
}

sortedArr = [1,3,4,5,12]
console.log(binarySearch(sortedArr, 3))
console.log(binarySearch(sortedArr, 15))
console.log(binarySearch(sortedArr, -2))
console.log(binarySearch(sortedArr, 5))

function sortedRotated(arr){
    var start = 0
    var end = arr.length - 1
    while(end - start > 1){
        var mid = Math.floor((start + end) / 2)
        console.log("mid:", mid)
        console.log("start:", start)
        console.log("end:", end)
        if(arr[mid] > arr[end]) {
            start = mid
            console.log("moving start:", arr[start])
        } else {
            end = mid
            console.log("moving end:", arr[end])
        }
    }
    console.log(arr.slice(start, end + 1))
    return arr[end]   
}

testArr3 = ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"]
console.log(sortedRotated(testArr3))