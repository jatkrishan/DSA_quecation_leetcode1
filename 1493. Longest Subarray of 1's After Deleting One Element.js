var longestSubarray=function(nums){
    let e=nums.length-1;
    let l=0;
    let count=0
     if(nums.length<=1)
        return 0
   return recursion(nums,l,e,count);
}

function recursion(nums,l,e,count1) {
         let k=l
   if(l>=e)
     return count1
          
   let zeroCount=0;
         let curCount=0
   while(k<=e){
  
       if(nums[k] == 0){
            zeroCount++
       }
       if(zeroCount == 2){
           break;
       }
       
       if(nums[k]>=1 && nums[k]!=0){
        curCount++
           k++;
    }else{
       k++
       }
   }
   if(zeroCount == 0){
       curCount--
   }
   l++
    count1=Math.max(count1,curCount)
      return recursion(nums,l,e,count1)

};