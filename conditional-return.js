function isEven (number)
{
    if(number % 2 === 0){
        return true;
    }

    else {
        return false;
    }
}

const num1=4;
console.log('The number is ',num1);
const value1 = isEven(num1);

console.log(isEven(num1));
if(value1===true)
{
    console.log('The number is EVEN');
}
else{
    console.log('The number is ODD');
}

const num2=5;
console.log('The number is ',num2);
console.log(isEven(num2));
const value2 = isEven(num2);
if(value2===true)
{
    console.log('The number is EVEN');
}
else{
    console.log('The number is ODD');
}