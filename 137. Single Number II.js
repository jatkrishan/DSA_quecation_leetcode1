var singleNumber = function(arr) {
    let map=new Map()
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        let count=map.get(arr[i])
        count++;
        map.set(arr[i], count)
    }
    else{
        map.set(arr[i],1)
    }
}
    let key=map.keys()
    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])==1){
            return arr[i]
        }
    }
 return -1
};