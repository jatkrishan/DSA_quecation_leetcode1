var isAnagram = function(arr1, arr2) {
    if(arr1.length!=arr2.length)
    return false;
let map=new Map();
for(let i=0;i<arr1.length;i++){
    if(map.has(arr1[i])){
        let count=map.get(arr1[i])
        count++;
        map.set(arr1[i],count)
    }else{
    map.set(arr1[i],1)
    }
}
    for(let i=0;i<arr2.length;i++){
    if(map.has(arr2[i])){
        let count=map.get(arr2[i])
        count--;
        map.set(arr2[i],count)
    }else{
  return false
    }
}
let keys=map.keys()
for(let key of keys){
    if(map.get(key)!=0)
    return false;

}
return true;
};