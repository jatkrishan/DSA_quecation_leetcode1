var getAverages = function(nums,k) {
    let n=nums.length
      let array=new Array(n).fill(-1)
           let sum=0 
      for(let i=0;i<2*k;i++){
        sum+=nums[i]
      }
      for(let i=k*2;i<n;i++){
           sum+=nums[i]
          let avg=Math.floor((sum)/(2*k+1))
          array[i-k]=avg;
          sum-=nums[i-2*k]
         }
      
  
      return array;
  }