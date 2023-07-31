var romanToInt = function(s) {
    let map=new Map()
 map.set('I',1),       
  map.set( 'V',5),
 map.set(  'X',10),
 map.set( 'L' ,50),
 map.set( 'C' ,100),
 map.set( 'D' ,500),
 map.set( 'M' ,1000)
 let result=0,n=s.length;
 
 for(let i=0;i<n;i++){
    let k= map.get(s[i])
    let p=map.get(s[i+1])
     if(k<p)
     result-=map.get(s[i])
     else
     result+=map.get(s[i])
 }
 return result
};