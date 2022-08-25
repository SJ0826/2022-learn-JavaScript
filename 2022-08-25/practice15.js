let arr = [1, 2, 3];
let arrCopy = [...arr]; 


alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); 


alert(arr === arrCopy); 


arr.push(4);
alert(arr); 
alert(arrCopy); 