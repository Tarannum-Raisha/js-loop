// for(let i =0; i<=20; i++){
//     if(i % 2 ===1){
//         console.log(i);
//     }
// }


// odd
// for(let i =0; i<=20; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }



// for(let i =1; i<=20; i+=2){
   
//     console.log( 'its a odd number ', i);

// }



// // even

// for(let i =0; i<=20; i+=2){
   
//     console.log('it is a even number',i);

// }




// for(let i =0; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// for(let i =0; i<=20; i++){
//     if(i % 2 !== 1){
//         console.log(i);
//     }
// }

// give me the numbers from 1 to 30 which is divisible by 5 or 3

// for(let i = 1 ; i<=30 ; i++){
//     if(i % 3 === 0  || i%5 === 0){
//         console.log(i)
//     }
// }


// for(let i = 1 ; i<=30 ; i++){
//     if(i % 3 === 0  && i%5 === 0){
//         console.log(i)
//     }
// }


// give the sum of the number from 1 to 20 which is divisible by 3

 let sum =0;

for(let i = 1 ; i<=20; i++){
    if(i%3 === 0){
        console.log(i);
        sum = sum + i;
    }
}
console.log( 'total number',sum);