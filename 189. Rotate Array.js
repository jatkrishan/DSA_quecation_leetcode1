var rotate = function(s, n) {
  
    while(n != 0){
let l=s.pop([s.length-1])
 s.unshift(l)
  n--
}
      

  return s
};