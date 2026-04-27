/*Given an array arr[], check if it is sorted in ascending order or not. Equal values are allowed in an array and two consecutive equal values are considered sorted.*/

function isSorted(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i] < arr[i-1]){
            return false;
        }

        return true;
    }
}