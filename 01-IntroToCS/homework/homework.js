'use strict';

function BinarioADecimal(num) {
   //"1011"
   //   0   1   2 , 3
   // ["1","0","1","1"] reverse
   //  0   1   2   3
   //["1","1","0","1"]
   //"i" es el iterador que vale el indice desde el 0 al final
   //2 elevado a i(0) x elemento[i](1)     2 elevado a 0 siempre da 1        
   //2^i  * [i] =  1
   //pushea a un array []
   //valor = 11
   let numInvertido = num.split("").reverse()
   let valor = 0
   for(let i = 0; i < numInvertido.length; i++){
      valor += (2**i) * numInvertido[i]
   }  
   return valor      
}

function DecimalABinario(num) {
if(num === 0)return "0"

let binario = ""
   while(num > 0){   
    
      if(num  % 2 === 1){
         binario = "1" + binario
      }else{
         binario = "0" + binario
      }
      num = Math.floor(num/2)
   }
   return binario
}
// console.log(DecimalABinario(120))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

// console.log(BinarioADecimal("101111"))

/*
12/ 2 2 x 6 = 0


*/