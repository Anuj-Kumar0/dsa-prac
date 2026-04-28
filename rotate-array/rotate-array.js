/*Rotations in the array is defined as the process of rearranging the elements in an array by shifting each element to a new position. This is mostly done by rotating the elements of the array clockwise or counterclockwise.*/

function rotateArr(arr, d){
    let n = arr.length;


    d = d%n;

    let temp = [];

    for(let i=0; i<d; i++){
        temp[i] = arr[ n - d + i];
    }

    for(let i=0; i<(n-d); i++){
        temp[i + d] = arr[i];
    }

    for(let i=0; i<n; i++){
        arr[i] = temp[i];
    }

    return arr;
}