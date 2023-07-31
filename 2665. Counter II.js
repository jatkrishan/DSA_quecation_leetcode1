var createCounter = function(init) {
    let k = init;
   function increment(){
       return ++k
   }
    function decrement(){
       return --k
   }
     function reset(){
       return (k = init)
   }

   return { reset , decrement , increment }
   

}