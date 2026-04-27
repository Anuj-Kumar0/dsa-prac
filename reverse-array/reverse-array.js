    /*Reverse an array arr[]. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.*/

    function reverseArray(arr){
        let temp = [];
        let j = 0;

        for(let i=arr.length-1; i>=0; i--){
            temp[j] = arr[i];
            j++;
        }
        
        for(let i=0; i<temp.length; i++){
            arr[i] = temp[i];
        }
        return arr;
    }
