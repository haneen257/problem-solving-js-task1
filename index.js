// write a function that take n as paramter and sum from 1 to n
// write a function that sum all number between 1 to n

function sumToN(n){
    let sum = 0;
    for(let i =1; i<= n ; i++){
        sum = sum + i;

    }
    console.log(sum);

}
sumToN(5);

// i = 1 | 1 <= 5 | sum = 0 + 1 = 1 
// i = 2 | 2 <= 5 | sum = 1 + 2 = 3
// i = 3 | 3 <= 5 | sum = 3 + 3 = 6
// i = 4 | 4 <= 5 | sum = 6 + 4 = 10
// i = 5 | 5 <= 5 | sum = 10 + 5 = 15 
// i = 2 | 2 <= 6