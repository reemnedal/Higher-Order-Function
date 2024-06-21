//using for 

function elementPowerTwo(x){
 

let newArray=[...x]; 

console.log(newArray);

let newArray2=[];
 
for (let i=0; i<newArray.length ; i++ )
{
 
 newArray2.push( newArray[i] * newArray[i]);


    

}


  document.write(newArray2);

    
}



elementPowerTwo(prompt("enter all array element ")) ;

  
//using forech 
/* 

 let x =prompt("enter all array element ");

 let y=x.split('');

y.forEach((element) => document.write(element*element+"  "));
 */

  

 




//using map 

// let x =prompt("enter all array element ");

// let y=x.split('');

// y.map((t) => document.write( t * t +" "));

