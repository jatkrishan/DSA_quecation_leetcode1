var minCost=function(nums,count){
    let r=nums.reduce((a,b)=>Math.max(a,b))
    let l=nums.reduce((a,b)=>Math.min(a,b))
    let result;
    while(r>=l){
        let mid= l+Math.floor((r-l)/2)
        let count1=min(nums,count,mid)
        let count2=min(nums,count,mid+1)
       
        result=Math.min(count1,count2)
        
        if(count2>count1){
            r=mid-1
        }
        else{
            l=mid+1;
        }
            
    }
        return result;
}

    function min(nums,count,mid){
        let result=0
        let n=count.length;
        for(let i=0;i<n;i++){
            result+=Math.abs((mid-nums[i])*count[i])
        }
        return result;
    }