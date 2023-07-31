var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        let key = target-nums[i]
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]==key) return [i,j]
          
        }
    }
    return []
};