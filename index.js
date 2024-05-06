const Binary_search = function(arr, n){
    let size = arr.length;
    if(size === 1) return 0;

    let low = 0;
    let high = arr.length-1;

    while(low <= high){
        let mid = low + (high-low)/2;

        if(arr[mid] === n) return mid;
        
        else if(arr[mid] < n) low = mid+1;

        else high = mid - 1;
    }

    return -1;
}

module.exports = Binary_search(arr,n);