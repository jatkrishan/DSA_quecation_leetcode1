var reverseString = function(s) {
    let l=0;
  let e=s.length-1;
  while(l<e){
      let temp=s[l]
      s[l]=s[e]
      s[e]=temp
      l++
      e--
  }
  return s
};