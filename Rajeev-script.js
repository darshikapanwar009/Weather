// added the scrpit my own
let a=1;
let b=2;
console.log(a);

function fac(num){
    if(num==0 || num==1){
        return 1;
    }    else{
        return num*fac(num-1);
    }       
    
}

fac(5);
