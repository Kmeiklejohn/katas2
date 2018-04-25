function fibonacci(f){
    let total=0;
    let x=0;
    let y=1;
    for(var i=2; i<f; i++){
        total=add(x,y)
        x=y;
        y=total;


    }return(total)

}



function add(a,b) {
    
    c = a + b;
      
    return(c);
}

console.log(fibonacci(8))