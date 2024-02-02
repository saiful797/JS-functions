function evenNumbersOnly (numbers)
{
    //const even=[];
    let evenSum=0;
    for(const number of numbers){
        // console.log(number);

        if(number % 2 === 0){
            console.log(number);
            //even.push(number);
            evenSum = evenSum + number;
        }
    }

    //return even;

    return evenSum;
}

const arrNumbers=[12,13,14,15,23, 34, 45];
//const evenArray=evenNumbersOnly(arrNumbers);
//console.log(evenArray);

const sumOfArray=evenNumbersOnly(arrNumbers);
console.log('The total:',sumOfArray);