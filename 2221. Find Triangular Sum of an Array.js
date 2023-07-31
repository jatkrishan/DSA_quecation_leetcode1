function findtringalSum(arr,n){
    if(n==1)
    return arr
let array=new Array(n-1)  
for(let i=0;i<n-1;i++){   
 array[i]=(arr[i]+arr[i+1])%10   

}
  //  console.log(array)
 return triangularSum(array,n-1)
};

var triangularSum = function(s){
let n=s.length;
   if(s===undefined)
    return 
 

return  findtringalSum(s,n)
}
