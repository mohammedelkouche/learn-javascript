//=================== Array

// const countrie = ['maroc', 'algerie', 'tunisie', 'egybt']

// console.table(countrie)
// console.table(...countrie) // recuper value of countrie
// console.table([...countrie]) // new table  

// const countri2 = ['usa','canada','brazil']

// // Array merge (concatination)

// console.table([...countrie, ...countri2])


// =================== Object

const fruit = {
    nom : 'apple',
    color : 'red',
    price : '3'
}

const fruit2 = {
    nom : 'apple',
    color : 'green',
    weight : '0.5' 
}

console.log({...fruit, ...fruit2})