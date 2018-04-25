function power(x,n){
    var p=x;

    for(var i=1; i<n; i++){
        p=multiply(x,p);
    }   
        return(p);


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

console.log(power(2,8));
