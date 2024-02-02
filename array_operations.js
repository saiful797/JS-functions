function sumOfNumbers (numbers)
{
    let sum=0;
    for(const arrayNumbers of numbers)
    {
        console.log(arrayNumbers);
        sum+=arrayNumbers;
    }
    return sum;
}

// const arrNum = 13;

const arrNum=[10, 12, 13, 15];
const returnTotal = sumOfNumbers(arrNum);
console.log('The Total: ', returnTotal);