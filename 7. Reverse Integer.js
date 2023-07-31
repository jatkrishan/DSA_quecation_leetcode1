var reverse = function(arr) {
    let str = arr.toString()
 let str2 = str.split("")
 let i=0;
 let r=str2.length-1;
 while(r>i){
     if(str2[i] == "-"){
           i++
         continue;
         
     }else{
         let temp = str2[i]
         str2[i] = str2[r]
         str2[r] = temp;
         i++;
         r--
     }
 }
 let result =  parseInt(str2.join(""))
if(result > 2147483647 || result < -2147483647){
   return 0;
}

 return result;
};