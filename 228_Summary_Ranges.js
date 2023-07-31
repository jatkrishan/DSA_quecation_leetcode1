var summaryRanges = function(nums) {
    let result=[];
    for(let i=0;i<nums.length;i++){
     let end=i;
     while(nums[end + 1]===nums[end]+1){
        end+=1;
        }
     end>i ?result.push(`${nums[i]}->${nums[end]}`):result.push(`${nums[end]}`)
             
        i=end;
    }
    
 
    return result
};