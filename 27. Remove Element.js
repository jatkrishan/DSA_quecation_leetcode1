var removeElement = function(nums, val) {
    let k=[]
    let l=0;
     for(let i=0;i<nums.length;i++){
         if(nums[i] != val){
          nums[l]=nums[i]
              l++
     }}
     return l
 };