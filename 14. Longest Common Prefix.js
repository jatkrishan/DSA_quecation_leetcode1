var longestCommonPrefix = function(str) {
    if(str.length==0)
     return ""
    let n=str[0].length;
   for(let i=0;i<n;i++){
    for(let j=1;j<str.length;j++){
         if(str[0][i]!=str[j][i]){
         return str[0].slice(0,i)
         }
   
   }
   }
   return str[0]
   }