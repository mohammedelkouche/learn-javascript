// alert("hello mohammed");


// ======================================= //

// block scoop let/ var 
// if we do a let age inside a scoop and try to alert it is error undefined but for var it's normale
// it's prefarable to use let than var  

function DisplayAge ()
{
    if (true)
    {
        // let age = 25;
        var age = 25;
    }
    alert(age);
}

// DisplayAge();


// globale scope
// function scope
// let/ const (block scope)

// redeclaration   in let the rediclaration is error but var no

var age = 15;
var age = 15;
// let age = 15
// let age = 15
{
    var age = 18;
    // let age = 18;
}

// alert(age);

// constantes

const pi= 3.14

// alert(pi)


// ======================================= //

/* constantes

- Array
- Object
- Function
- RegExp
*/

// ===> Array

const countries = ['maroc', 'algerie', 'tunisie']

// countries[0] = 'egypt' //normale

// countries = ['libie'] // you change the table error  Assignment to constant variable.

countries.push('libie')

// console.table(countries) 

// ===> Object

const animale = {
    color : 'black',
    age : '2'
}

animale.color = 'gray'

animale.owner = 'mouad'
animale.type = 'dog'

// animale = {} // error Assignment to constant variable.

// document.writeln(JSON.stringify(animale))

// ===> Function

const DisplayAnimale = function (animale)
{
    document.writeln(JSON.stringify(animale))
}

DisplayAnimale(animale)


// ===> RegExp

const reg = new RegExp('/.../')