/*Given an array arr[] and an integer k, find the array after reversing every subarray of consecutive k elements in place. If the last subarray has fewer than k elements, reverse it as it is. Modify the array in place, do not return anything.*/

function reverseInGroups(arr, k){
    let n = arr.length;

    for(let i=0; i<n; i+=k){
        let left = i;

        let right = Math.min(((i + k) - 1), n-1);

        while(left < right){
          [arr[left], arr[right]] = [arr[right], arr[left]]

           left++;
           right--;
        }
    }
    return arr;
}

