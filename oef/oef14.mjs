let i = 1;

//loop 1 voor rij en loop 2 voor kolom

while(i <= 3){
    let j = 1;
    let uitv ='';
    while(j <= 4){
        let result = i*j;
        uitv += result;
        j++; 
    }
    console.log(uitv);
    i++;
}

process.exit();


/*
let i = 1;
while(i <= 3){
    let j = 2;
    let k = 3;
    while(i<=4||i*j <= 8||i*k <= 12){
        let result2 =i*j;
        let result3 =i*k;
        let result1 = i++;
        console.log(result1,result2,result3);
    }
}
*/

/*while(i <= 10){
    let j = 2;
    while(j <= 10){
        let k = 3;
        while(k <= 10){
            let result = i;//i*j,i*k;
            console.log(result);
        }
    }
    console.log("-----------------");
    i++;
}
*/
/*let result = i * j;
        console.log(`${i} x ${j} = ${result}`);
        j++;*/