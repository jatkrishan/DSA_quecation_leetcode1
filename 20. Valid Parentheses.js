function isValid(s){
    if(s.length%2==1) return false;
    let obj = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    let arr = [];

    for(i=0;i<s.length;i++){
        if(s[i]=="(" || s[i]=="{" || s[i]=="[") 
        arr.push(i)
        
        else if(obj[s[i]]==s[arr[arr.length-1]])
         arr.pop();
       
        else return false;
        
    }
    return arr.length?false:true
}