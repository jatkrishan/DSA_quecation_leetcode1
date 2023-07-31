var longestConsecutive = function(arr) {
    let set=new Set();

    let count=0;
    for(let i=0;i<arr.length;i++){
        set.add(arr[i])
    }
    for(let i=0;i<arr.length;i++){
        let k=arr[i]
        let curent=0
        if(!set.has(k-1)){
           while(set.has(k)){
               curent++
               k++
           }
        }
     count=Math.max(curent,count)
        
    }
    return count;
};