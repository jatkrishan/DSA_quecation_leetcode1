var lengthOfLongestSubstring = function(s) {
    let count=0;
 let map=new Map()
for(let i=0;i<s.length;i++){
 let count1=0;
 for(let j=i;j<s.length;j++){
    if(map.has(s[j])){
       map.clear()
        break;
    
    }else {
       map.set(s[j],1)
      count1++
     }
}
 count=Math.max(count1,count)
}

return count
};