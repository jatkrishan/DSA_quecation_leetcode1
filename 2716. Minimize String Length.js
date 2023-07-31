var minimizedStringLength = function(s) {
    let count=0;
    let map=new Map()
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            continue;
        }else{
            map.set(s[i],1)
            count++;
        }
    }
    return count
};