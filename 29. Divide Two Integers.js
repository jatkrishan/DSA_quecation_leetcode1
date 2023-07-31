var divide = function(div, did) {
    if(div === -2147483648 && did == -1){
            return 2147483647
         }
         if(did > 0 && div > 0){
            return Math.floor(div/did)
         }
              if(did < 0 && div < 0){
            return Math.floor(div/did)
         }
         else{
              let k=did
         let result=div
            if(div < 0){
             result = Math.abs(div)
            }
            if(did < 0){
          k =Math.abs(did)
            }
         let m = parsInt(result/k)
           return m-(m+m)
         }
        
    };