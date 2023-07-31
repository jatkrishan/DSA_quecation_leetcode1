var isPalindrome = function(x) {
    if(x<0){
  return false
  }
   let reserver=0,temp=x
while(temp!=0){
    reserver=reserver*10;
    reserver+=temp%10;
    temp=Math.floor(temp/10);
}
if(x===reserver){
    return true;
}

  return false;
};
