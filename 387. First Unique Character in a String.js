var firstUniqChar = function(arr) {
    let map=new Map()
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        let count= map.get(arr[i])
        count++
        map.set(arr[i],count)
    }else{
        map.set(arr[i],1)
    }
}
for(let i=0;i<arr.length;i++){
    if(map.get(arr[i])===1){
        return i
    }
}
    return -1;
};