
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

console.log(multiply(6,8));
