var fizzBuzz = function(n) {
    let arr=[]
for(let i=n;i>=1;i--){
     if(i%5==0 && i%3==0){
        arr[i]="FizzBuzz"
     }
         else if(i%5==0){
        arr[i]="Buzz"
    }
         else if(i%3==0){
        arr[i]="Fizz"
    }
  
    else{
       arr[i]=`${i}`
    }
}
arr.shift()
return arr
};