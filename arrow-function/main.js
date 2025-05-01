// first 

// function somme(a, b)
// {
//     return (a + b);
// }

// document.writeln(somme(2, 4));   

// second 

// const sum = function somme(a, b)
// {
//     return a + b
// }

// document.writeln(sum(3, 4));


// third method arrow 



// const somme = (a, b) => {
//     return a + b;
// }

// **** if one lign in return 

// const somme = (a, b) => a + b

// document.writeln(somme(12, 5));

///////////////

// default value exp =  (a = 2, b = 6)

// const somme = (a = 2, b = 6 ) => a + b

// document.writeln(somme());

const RestParam = (...numbers) => {
    let somme = 0;
    for(let i = 0;i < numbers.length; i++)
    {
        let n = numbers[i];
        somme = somme + n;
    }
    return (somme);
} 

document.writeln(RestParam(1,2,3,4,5,6))

// ****

// const Display = age => age

// document.writeln(Display(55))