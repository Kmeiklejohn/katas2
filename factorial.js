function factorial(x){
    
   
    var total=1;
    if(x===0){
        return(0)
    }
   for(var i=1; i<=x; i++){
       total= multiply(i,total)
       
   }return(total)
}




function multiply(x,y){
    var z=0;
 
        for(var i=1; i<=y; i++){
           z=add(z,x);
        }
        
        return(z);
    }


function add(a,b) {
    
    c = a + b;
      
    return(c);
}

console.log(factorial(5));
