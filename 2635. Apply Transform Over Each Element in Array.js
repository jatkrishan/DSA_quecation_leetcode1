var map = function(arr, fn) {
    let arr1=[]
    for(i=0;i<arr.length;i++){
           arr1[i]=fn(arr[i],i)
   
  }
   return arr1
  }