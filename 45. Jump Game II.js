var jump = function(nums) {
    let step=0
    let left=0,right=0
     let n=nums.length
      //  if(n<2)
      // return 0
while(right<n-1){
let max=0;
  for(let i=0;i<=right;i++){
max=Math.max(max,i+nums[i])
     }
  left=right+1;
   right=max;
  step++;

} 
  return step
};