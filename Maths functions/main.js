
function execute()
{
    let number = document.querySelector('#number').value
    // let res = Math.trunc(number)   // if we have 10.4  => Math.trunc(10.4) = 10
    // sign() if (negatife -5 => -1 , 5 => 1 , 0 => 0)

    // let res = Math.sign(number) 
    // cbrt() =>   jidr moka3ab    exp  8 = 2*2*2 alors cbrt (8) => 2
    // let res = Math.cbrt(number) 
    // let res = Math.log(number) 
    let res =  number ** 3  // Math.pow(number, 3);
    
    document.querySelector('#number').value = ''
    document.querySelector('#result').value = res
    console.log(number)
}
