var isMonotonic = function(arr) {
    let n=arr.length;
       if(arr[0]<arr[n-1]){
    for(let i=1;i<n;i++){
        if(arr[i-1]>arr[i])
            return false
    
    }
           
  
}    
       
       else{
        for(let i=1;i<n;i++){
        if(arr[i-1]<arr[i])
             return false
        }
        }
    
    return true
}
