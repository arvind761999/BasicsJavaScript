// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

// console.log(element);

// Break and Continue

// for(let index = 1; index <= 20; index++){
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }

//     console.log((`value of i is ${index}`));
// }



for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }

    console.log((`value of i is ${index}`));
}


